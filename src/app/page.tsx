import { DollarSign, PackagePlus, Users, Users2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Chart from "@/components/chart";
import CustomersCard from "@/components/overall";

export default function Home() {
  return (
    <div className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        <Card >
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total Sales
              </CardTitle>

              <DollarSign className="ml-auto h-4 w-4 text-green-800"/>
            </div>
            
            <CardDescription>
              Sales last 30 days
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold text-gray-900 select-none">
              $24,895
            </p>
          </CardContent>
        </Card>

        <Card >
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Customers
              </CardTitle>

              <Users className="ml-auto h-4 w-4 text-green-800"/>
            </div>
            
            <CardDescription>
              New customers last 30 days
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold text-gray-900 select-none">
              1082
            </p>
          </CardContent>
        </Card>

        <Card >
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Products
              </CardTitle>

              <PackagePlus className="ml-auto h-4 w-4 text-green-800"/>
            </div>
            
            <CardDescription>
              New products last 30 days
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold text-gray-900 select-none">
              243
            </p>
          </CardContent>
        </Card>

        <Card >
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Emploeeys
              </CardTitle>

              <Users2 className="ml-auto h-4 w-4 text-green-800"/>
            </div>
            
            <CardDescription>
              New Emploeeys last 30 days
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold text-gray-900 select-none">
              2
            </p>
          </CardContent>
        </Card>

      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <Chart/>
        <CustomersCard/>
      </section>
      
    </div>
  );
}
