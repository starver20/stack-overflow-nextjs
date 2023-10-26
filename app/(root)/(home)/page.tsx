import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div>
      {/* amar */}
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}