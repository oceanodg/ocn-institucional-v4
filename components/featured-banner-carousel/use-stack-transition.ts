"use client";

import * as React from "react";

export type Direction = "next" | "previous";
export type Phase = "retreat" | "advance";

export type StackTransition = {
  from: number;
  to: number;
  direction: Direction;
  phase: Phase;
};

type State = {
  index: number;
  transition: StackTransition | null;
};

type Options = {
  retreatMs: number;
  advanceMs: number;
};

function wrap(index: number, total: number) {
  return (index + total) % total;
}

function shortestDirection(from: number, to: number, total: number): Direction {
  const forward = wrap(to - from, total);
  return forward <= total - forward ? "next" : "previous";
}

function start(prev: State, target: number, total: number, direction?: Direction): State {
  const to = wrap(target, total);
  if (prev.transition || to === prev.index) {
    return prev;
  }
  return {
    index: prev.index,
    transition: {
      from: prev.index,
      to,
      direction: direction ?? shortestDirection(prev.index, to, total),
      phase: "retreat",
    },
  };
}

/**
 * Máquina de estados da troca em duas fases:
 * - retreat: o cartão central recua para a lateral (índice ainda é o antigo);
 * - advance: o cartão lateral avança para o centro (índice já é o novo).
 */
export function useStackTransition(total: number, { retreatMs, advanceMs }: Options) {
  const [state, setState] = React.useState<State>({ index: 0, transition: null });
  const phase = state.transition?.phase;

  React.useEffect(() => {
    if (!phase) return;

    const timer = window.setTimeout(
      () =>
        setState((prev) => {
          if (!prev.transition) return prev;
          if (prev.transition.phase === "retreat") {
            return {
              index: prev.transition.to,
              transition: { ...prev.transition, phase: "advance" },
            };
          }
          return { index: prev.index, transition: null };
        }),
      phase === "retreat" ? retreatMs : advanceMs
    );

    return () => window.clearTimeout(timer);
  }, [phase, retreatMs, advanceMs]);

  const goTo = React.useCallback(
    (target: number) => setState((prev) => start(prev, target, total)),
    [total]
  );

  const next = React.useCallback(
    () => setState((prev) => start(prev, prev.index + 1, total, "next")),
    [total]
  );

  const previous = React.useCallback(
    () => setState((prev) => start(prev, prev.index - 1, total, "previous")),
    [total]
  );

  return { index: state.index, transition: state.transition, goTo, next, previous };
}
