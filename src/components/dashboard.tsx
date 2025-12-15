import '../css/dashboard.css'
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card"
  
import {
    ChartContainer,
    ChartTooltip,
  } from "@/components/ui/chart"
import { useEffect, useState } from 'react'

import axios from 'axios'
import { baseURL } from '../api/api'


const Dashboard = () => {
    
    const chartConfig = {
        desktop: {
          label: "Visits",
          color: "hsl(var(--chart-1))",
        },
      }
      const [chartData, setChartData] = useState([
        { month: "Janeiro", visits: 0 },
        { month: "Fevereiro", visits: 0 },
        { month: "Março", visits: 0 },
        { month: "Abril", visits: 0 },
        { month: "Maio", visits: 0 },
        { month: "Junho", visits: 0 },
        { month: "Julho", visits: 0 }, // Replace with actual data for July
        { month: "Agosto", visits: 0 }, // Replace with actual data for August
        { month: "Setembro", visits: 0 }, // Replace with actual data for September
        { month: "Outubro", visits: 0 }, // Replace with actual data for October
        { month: "Novembro", visits: 0 }, // Replace with actual data for November
        { month: "Dezembro", visits: 0 } // Replace with actual data for December
    ]);

    //@ts-ignore
    const [months, setMonths] = useState([
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
  ])
    
    //@ts-ignore
    const [monthlyViews, setMonthlyViews] = useState<any>([])
    useEffect(() => {
      
      axios.get(`${baseURL}/api/monthlyViews`)
      .then(res => {
        let mViews = [...res.data].filter((item)=> {
          if (new Date(item?.dateAdded).getFullYear() == new Date().getFullYear()) {
            return item
          }
        })
        setChartData( [
          {
              "month": "Janeiro",
              "visits": mViews.reduce((count, curr) => {
                const date = new Date(curr?.dateAdded);
            
                if (date.getMonth() === 0) {
                    count++;
                }
            
                return count;
            }, 0)
          },
          {
              "month": "Fevereiro",
              "visits": mViews.reduce((count, curr) => {
                const date = new Date(curr?.dateAdded);
            
                if (date.getMonth() === 1) {
                    count++;
                }
            
                return count;
            }, 0)
          },
          {
              "month": "Março",
              "visits": mViews.reduce((count, curr) => {
                const date = new Date(curr?.dateAdded);
            
                if (date.getMonth() === 2) {
                    count++;
                }
            
                return count;
            }, 0)
          },
          {
              "month": "Abril",
              "visits": mViews.reduce((count, curr) => {
                const date = new Date(curr?.dateAdded);
            
                if (date.getMonth() === 3) {
                    count++;
                }
            
                return count;
            }, 0)
          },
          {
              "month": "Maio",
              "visits": mViews.reduce((count, curr) => {
                const date = new Date(curr?.dateAdded);
            
                if (date.getMonth() === 4) {
                    count++;
                }
            
                return count;
            }, 0)
          },
          {
              "month": "Junho",
              "visits": mViews.reduce((count, curr) => {
                const date = new Date(curr?.dateAdded);
            
                if (date.getMonth() === 5) {
                    count++;
                }
            
                return count;
            }, 0)
          },
          {
              "month": "Julho",
              "visits": mViews.reduce((count, curr) => {
                const date = new Date(curr?.dateAdded);
            
                if (date.getMonth() === 6) {
                    count++;
                }
            
                return count;
            }, 0)
          },
          {
              "month": "Agosto",
              "visits": mViews.reduce((count, curr) => {
                const date = new Date(curr?.dateAdded);
            
                if (date.getMonth() === 7) {
                    count++;
                }
            
                return count;
            }, 0)
          },
          {
              "month": "Setembro",
              "visits": mViews.reduce((count, curr) => {
                const date = new Date(curr?.dateAdded);
            
                if (date.getMonth() === 8) {
                    count++;
                }
            
                return count;
            }, 0)
          },
          {
              "month": "Outubro",
              "visits": mViews.reduce((count, curr) => {
                const date = new Date(curr?.dateAdded);
            
                if (date.getMonth() === 9) {
                    count++;
                }
            
                return count;
            }, 0)
          },
          {
              "month": "Novembro",
              "visits": mViews.reduce((count, curr) => {
                const date = new Date(curr?.dateAdded);
            
                if (date.getMonth() === 10) {
                    count++;
                }
            
                return count;
            }, 0)
          },
          {
              "month": "Dezembro",
              "visits": mViews.reduce((count, curr) => {
                const date = new Date(curr?.dateAdded);
            
                if (date.getMonth() === 11) {
                    count++;
                }
            
                return count;
            }, 0)
          }
      ])
        setMonthlyViews([...res.data].filter((item)=> {
          if (new Date(item?.dateAdded).getFullYear() == new Date().getFullYear()) {
            return item
          }
        }))
      })
    }, [])
    
    return (
        <div className="dashboardContainer">
            <div className="title">Painel Administrativo</div>

            {/* <section className='firstStats'>
                <div className='stat'>
                    <div className='header'>
                        <div className='title'>
                            Número de visitantes
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
  <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/>
</svg>
                    </div>
                    <div className='statValue'>+348</div>
                    <div className='difference'>+180 desde o mês passado</div>
                </div>
                <div className='stat'>
                    <div className='header'>
                        <div className='title'>
                        Duração média/sessão
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
  <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/>
</svg>
                    </div>
                    <div className='statValue'>+348</div>
                    <div className='difference'>+180 desde o mês passado</div>
                </div>
                <div className='stat'>
                    <div className='header'>
                        <div className='title'>
                        Páginas vistas/sessão
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
  <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/>
</svg>
                    </div>
                    <div className='statValue'>+348</div>
                    <div className='difference'>+180 desde o mês passado</div>
                </div>
                <div className='stat'>
                    <div className='header'>
                        <div className='title'>
                        Documentos baixados
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
  <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/>
</svg>
                    </div>
                    <div className='statValue'>12</div>
                    <div className='difference'>+180 desde o mês passado</div>
                </div>
            </section> */}

            <section className='secondStats'>
             
            <Card style={{flex: 2}}>
      <CardHeader>
        <div className='cardTitle'>Visitantes ao longo do ano</div>
        <CardDescription>Janeiro - Dezembro {new Date().getFullYear()}</CardDescription>
      </CardHeader>
      <CardContent style={{}}>
        <ChartContainer className='chartContainer' style={{height: '100%', width: '100%',}} config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={(item: any) => {
                //(chartData.filter((item1)=> item1.month == item?.label)[0]?.visits)
                return (
              <div className='chartTTContent'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
{chartData.filter((item1)=> item1.month == item.label)[0]?.visits}
              </div>)}}
            />
            <Bar dataKey="visits" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {/* <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div> */}
        <div className="leading-none text-muted-foreground">
        Mostrando o total de visitantes ao longo do ano
        </div>
      </CardFooter>
            </Card>
           
            </section>

            {/* third row */}
            <section className='thirdStats'>
            


                
            </section>
        </div>
    )
}
export default Dashboard