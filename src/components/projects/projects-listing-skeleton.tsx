export const ProjectsListingSkeleton = () => (
  <>
    <div className="bg-muted/50 mb-8 h-9 w-64 animate-pulse rounded-lg" />
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="bg-muted/50 h-44 animate-pulse rounded-xl" />
      ))}
    </div>
  </>
);
