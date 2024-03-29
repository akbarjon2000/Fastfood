import React, { PureComponent } from 'react';
import { ReactComponent as Pack } from "../../assets/icon/Pack.svg"
import { ReactComponent as Filter } from "../../assets/icon/filter.svg"
import {
    XAxis,
    Tooltip,
    AreaChart,
    Area,
    ResponsiveContainer,
} from 'recharts';
import { Container1, Container2, Container3 } from './style';
const data = [
    {
        name: 'Dec 13',
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Dec 14',
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Dec 15',
        uv: 2000,
        pv: 3800,
        amt: 2290,
    },
    {
        name: 'Dec 16',
        uv: 2780,
        pv: 1908,
        amt: 2000,
    },
    {
        name: 'Dec 17',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Dec 18',
        uv: 2390,
        pv: 2700,
        amt: 2500,
    },
    {
        name: 'Dec 19',
        uv: 2390,
        pv: 2400,
        amt: 2500,
    },
    {

        uv: 2390,
        pv: 2400,
        amt: 2500,
    },

];
const data2 = [
    {
        name: 'Dec 13',
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Dec 14',
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Dec 15',
        uv: 2000,
        pv: 3800,
        amt: 2290,
    },
    {
        name: 'Dec 16',
        uv: 2780,
        pv: 1908,
        amt: 2000,
    },
    {
        name: 'Dec 17',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Dec 18',
        uv: 2390,
        pv: 2700,
        amt: 2500,
    },
    {
        name: 'Dec 19',
        uv: 2390,
        pv: 2400,
        amt: 2500,
    },
    {

        uv: 2390,
        pv: 2400,
        amt: 2500,
    },

];
export default class Graphs extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/synchronized-line-charts-zc3nl';

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: "flex-start", width: "1000px", flexWrap: "wrap" }}>

                <Container1>
                    <div className='top'>
                        <p className='title'>New Orders | All Branches</p>
                        <p className='date'>13.01.2021-19.01.2021</p>
                        <div className='Con'>
                            <Pack className="icon" />
                        </div>
                        <div className='Con' >
                            <Filter className="icon" />
                        </div>
                    </div>
                    <div style={{ width: '500px' }}>
                        <ResponsiveContainer width="98%" height={200}>
                            <AreaChart
                                width={480}
                                height={200}
                                data={data}
                                syncId="anyId"
                                margin={{
                                    top: 10,
                                    right: 0,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                <XAxis dataKey="name" opacity={0.5} />
                                <Tooltip />
                                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" opacity={0.5} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Container1>
                <Container2>
                    <div className='top'>
                        <p className='title'>Cancelled Orders | All Branches</p>
                        <p className='date'>13.01.2021-19.01.2021</p>
                        <div className='Con'>
                            <Pack className="icon" />
                        </div>
                        <div className='Con' >
                            <Filter className="icon" />
                        </div>
                    </div>
                    <div style={{ width: '490px' }}>
                        <ResponsiveContainer width="100%" height={200}>
                            <AreaChart
                                width={500}
                                height={200}
                                data={data2}
                                // syncId="anyId"
                                margin={{
                                    top: 10,
                                    right: 0,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                <XAxis dataKey="name" opacity={0.5} />
                                <Tooltip />
                                <Area type="monotone" dataKey="pv" stroke="red" fill="red" opacity={0.5} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Container2>
                <Container3>
                    <div className='top'>
                        <p className='title'>Payment Methods | Hadra</p>
                        <p className='date'>13.01.2021-19.01.2021</p>
                        <div className='Con'>
                            <Pack className="icon" />
                        </div>
                        <div className='Con' >
                            <Filter className="icon" />
                        </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "36px", padding: "0" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>

                            <div className='circle'></div>
                            <p className='type' >Terminal - <span style={{ opacity: "0.5" }}>12000000 KRW</span></p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>

                            <div className='mybarchart'>
                                <div className='insider1'></div>
                            </div>
                            <p className='persent'>45%</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "36px", padding: "0" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>

                            <div className='circle' style={{ backgroundColor: "#20D472" }}></div>
                            <p className='type' >Cash - <span style={{ opacity: "0.5" }}>12000000 KRW</span></p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>

                            <div className='mybarchart'>
                                <div className='insider1' style={{ backgroundColor: "#20D472", width: "57%" }}></div>
                            </div>
                            <p className='persent'>57%</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "36px", padding: "0" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>

                            <div className='circle' style={{ backgroundColor: "#64EDF4" }}></div>
                            <p className='type' >Payme - <span style={{ opacity: "0.5" }}>12000000 KRW</span></p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>

                            <div className='mybarchart'>
                                <div className='insider1' style={{ backgroundColor: "#64EDF4" }}></div>
                            </div>
                            <p className='persent'>45%</p>
                        </div>
                    </div>
                </Container3>
            </div>
        );
    }
}
