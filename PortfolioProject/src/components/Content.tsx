import React from 'react';
import './content.css'
import machinelearning from '../assets/machinelearning.jpg'
import webscraping from '../assets/webscraping.jpg'
import portfolio from '../assets/portfolio.jpg'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
const Content: React.FC = () => {
    return (
        <>
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6 border rounded-lg'>
            <h1 className='text-4xl md:text-4xl text-red-500 font-bold'>My Projects</h1>
        </div>
        <div className='grid grid-cols-3 gap-4 justify-center'>
            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col 1,3fr items-start">
                    <p className="text-tiny uppercase font-bold">Working on:</p>
                    <small className="text-default-500">RaspberryPi homenetwork adblocker</small>
                    <h4 className="font-bold text-large">DNS Filtering</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        src={machinelearning}
                        alt="Card background"
                        className="object-cover rounded-xl"
                        width={300}
                        height={200}
                    />
                </CardBody>
            </Card>
            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">Working on:</p>
                    <small className="text-default-500">Training model for fishing dataset fangstdata2018</small>
                    <h4 className="font-bold text-large">Machine Learning</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={portfolio}
                        width={300}
                        height={200}
                    />
                </CardBody>
            </Card>
            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">Working on</p>
                    <small className="text-default-500">Creating my react portfolio project</small>
                    <h4 className="font-bold text-large">Front-End Single Page Application</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={webscraping}
                        width={300}
                        height={200}
                    />
                </CardBody>
            </Card>
        </div>
        </>
    );
};

export default Content;
