import { UserPlus2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Avatar, AvatarImage } from "../ui/avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"


const CustomersCard = () => {
  return (
    <Card className="flex-1">
        <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Last Customers
              </CardTitle>

              <UserPlus2 className="ml-auto h-4 w-4 text-green-800"/>
            </div>

            <CardDescription>
                Last customers added in the system
            </CardDescription>

          </CardHeader>

            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://avatars.githubusercontent.com/u/153572408?v=4"/>
                        <AvatarFallback>SP</AvatarFallback>
                    </Avatar>

                    <div className="text-sm sm:text-base font-semibold">
                        <p className="text-sm sm:text-base font-semibold">User 1</p>
                        <span className="text-[12px] sm:text-md text-gray-400">email@email.com</span>
                    </div>
                </article>

                                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://avatars.githubusercontent.com/u/153572408?v=4"/>
                        <AvatarFallback>SP</AvatarFallback>
                    </Avatar>

                    <div className="text-sm sm:text-base font-semibold">
                        <p className="text-sm sm:text-base font-semibold">User 2</p>
                        <span className="text-[12px] sm:text-md text-gray-400">email@email.com</span>
                    </div>
                </article>

                                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://avatars.githubusercontent.com/u/153572408?v=4"/>
                        <AvatarFallback>SP</AvatarFallback>
                    </Avatar>

                    <div className="text-sm sm:text-base font-semibold">
                        <p className="text-sm sm:text-base font-semibold">User 3</p>
                        <span className="text-[12px] sm:text-md text-gray-400">email@email.com</span>
                    </div>
                </article>

            </CardContent>

            
    </Card>

    
  )
}

export default CustomersCard