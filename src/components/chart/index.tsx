"use client"

import {
    ChartContainer,
    type ChartConfig,
} from "@/components/ui/chart"
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"
import { DollarSignIcon } from "lucide-react"

import { XAxis, CartesianGrid, Tooltip, Bar, BarChart } from "recharts";


const Chart = () => {

    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
    ]

    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "#2563eb",
        },
        mobile: {
            label: "Mobile",
            color: "#60a5fa",
        },
    } satisfies ChartConfig

    return (

        <Card className="w-full md:w-1/2 md:max-w-[600px]">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                        Sales Overview
                    </CardTitle>

                    <DollarSignIcon className="ml-auto h-4 w-4 text-green-800" />
                </div>
            </CardHeader>

            <CardContent>

                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid />
                        <XAxis dataKey="month" />
                        <Tooltip />
                        
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                    </BarChart>
                </ChartContainer>

            </CardContent>

        </Card>
    )
}

export default Chart