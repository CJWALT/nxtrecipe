import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  return (
    <div className="w-full bg-black min-h-screen">
        <Skeleton />
    </div>
  )
}

export default loading
