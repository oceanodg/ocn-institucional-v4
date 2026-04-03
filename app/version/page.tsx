export default function VersionPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="text-center space-y-4 p-8 rounded-lg shadow-lg bg-card text-card-foreground w-96">
        <h1 className="text-2xl font-bold">Versão</h1>
        <p className="font-bold">0.1</p>
        <p className="text-muted-foreground">03/04/2026 16:50</p>
        <p className="text-muted-foreground">.</p>
      </div>
    </div>
  );
}
