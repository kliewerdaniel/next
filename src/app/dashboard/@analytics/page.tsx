export default function AnalyticsPage() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded border">
          <div className="text-lg font-semibold">Page Views</div>
          <div className="text-2xl font-bold">12,345</div>
        </div>
        <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded border">
          <div className="text-lg font-semibold">Bounce Rate</div>
          <div className="text-2xl font-bold">2.4%</div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        This is loaded as a parallel route alongside the main dashboard.
      </p>
    </div>
  )
}
