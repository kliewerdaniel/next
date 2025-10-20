export default function RevenuePage() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded border">
          <div className="text-lg font-semibold">Total Revenue</div>
          <div className="text-2xl font-bold">$48,392</div>
        </div>
        <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded border">
          <div className="text-lg font-semibold">Subscriptions</div>
          <div className="text-2xl font-bold">1,247</div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        This is loaded as a parallel route with independent state.
      </p>
    </div>
  )
}
