import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC =  () => {
  return (
    // <div>
    //   <h1 className=" text-xl font-extralight">Landing Page</h1>
    //   <Card />
    // </div>

    <div className="flex flex-col items-center justify-center min-h-screen gap-3 mt-4">
        <Button title="Small Rounded" size="small" shape="rounded-sm" />
        <Button title="Medium" size="medium" shape="rounded-md" />
        <Button title="Large" size="large" shape="rounded-lg" />
        <Button title="Large" size="large" shape="rounded-full" />
        
    </div>
  )
}
export default Landing