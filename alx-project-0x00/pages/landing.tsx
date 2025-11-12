import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC =  () => {
  return (
    // <div>
    //   <h1 className=" text-xl font-extralight">Landing Page</h1>
    //   <Card />
    // </div>

    <div className="flex gap-3 mt-4">
        <Button title="Small" size="small" shape="rounded-sm" />
        <Button title="Medium" size="medium" shape="rounded-md" />
        <Button title="Large" size="large" shape="rounded-lg" />
        <button />
    </div>
  )
}
export default Landing