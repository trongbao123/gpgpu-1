"use client";
import Image from "next/image";
import "./index.scss";
import { Button, Input, Popover, Table } from "antd";
import { logo, provider } from "@component/constants";
import StateComponent from "@component/components/state";
import { useRouter } from "next/navigation";
import Link from "next/link";
export const DeviceTable = () => {
    const router = useRouter();
    const columns = [
        {
            title: "State",
            dataIndex: "state",
            key: "state",
            render: (text: any) => <StateComponent state={text} />,
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Chip",
            dataIndex: "chip",
            key: "chip",
            render: (props: any) => {
                return (
                    <div className="chip-container">
                        <Image src={(logo as any)[props]} alt="logo" width={16} height={16} />
                        <p>{props}</p>
                    </div>
                );
            },
        },

        {
            title: "Ultilitization",
            dataIndex: "ulti",
            key: "ulti",
            render: (text: any) => <div className="ulti">{text}</div>,
        },
        {
            title: "Network",
            dataIndex: "network",
            key: "network",
            render: (text: any) => (
                <div className="chip-container">
                    <Image src={"/images/network.svg"} alt="logo" width={16} height={16} />
                    <p>{text}</p>
                </div>
            ),
        },
        {
            title: "Uptime",
            dataIndex: "uptime",
            key: "uptime",
        },
        {
            title: "Hire Status",
            dataIndex: "hire",
            key: "hire",
            render: (text: any) => <div className="hire">{text}</div>,
        },
        {
            title: "Pool Type",
            dataIndex: "pool",
            key: "pool",
        },
        {
            title: "",
            key: "operation",
            width: 50,
            render: (item: any) => {
                return (
                    <Popover
                        content={
                            <div style={{ cursor: "pointer" }} onClick={() => router.push(`/${item.key}`)}>
                                detail
                            </div>
                        }
                        trigger="click"
                    >
                        <Image style={{ cursor: "pointer" }} src="/images/action.svg" width={24} height={24} alt="menu" />
                    </Popover>
                );
            },
        },
    ];

    return (
        <section className="table-container">
            <div className="table-header">
                <div className="table-header-left">
                    <span>Device Status</span>
                    <div className="search">
                        <Image src="/images/search.svg" width={20} height={20} alt="search" />
                        <input placeholder="Search Device Name" />
                    </div>

                    {/* <Input size="large" placeholder="large size" prefix={<></>} /> */}
                </div>
                <div className="table-header-right">
                    <Image src="/images/menu-table.svg" width={32} height={32} alt="menu" />
                </div>
            </div>
            <div className="table-body">
                <Table columns={columns} dataSource={provider} bordered={false} pagination={{ position: ["none", "none"] }} />
            </div>
        </section>
    );
};
