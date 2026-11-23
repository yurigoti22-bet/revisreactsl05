import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import lineDados from '../mock/lineDados.json';

export const GLine = () => {

    return (
        <AreaChart
            style={{ width: '100%', maxWidth: '1200px', maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={lineDados}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
            </defs>
            <CartesianGrid />
            <XAxis dataKey="label" />
            <YAxis width="auto" />
            <Tooltip />
            <Area
                type="monotone"
                dataKey="vendas"
                name='Vendas'
                stroke="#8884d8"
                activeDot={{ r:6}}
                fillOpacity={1}
                fill="url(#colorUv)"
                isAnimationActive={true}
                animationBegin={200}
                animationDuration={1300}
            />
            <Area
                type="monotone"
                dataKey="despesas"
                name='Despesas'
                stroke="#82ca9d"
                activeDot={{r:6 }}
                fillOpacity={1}
                fill="url(#colorPv)"
                isAnimationActive={true}
            />
        </AreaChart>
    )
}