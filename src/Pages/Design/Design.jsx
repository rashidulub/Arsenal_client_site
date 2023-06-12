import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";
const Design = () => {
    return (
        <div className='w-full h-full '>
            <h3 className="text-5xl uppercase my-10 text-center  border-b-4 border-red-950 font-bold py-4">dashboard</h3>
            <div>
                <Slide>
                    <h1 className="text-5xl font-bold  text-center text-blue-950">BECOME PART OF SOMETHING
                        BIGGER THAN YOURSELF!</h1>
                </Slide>

                <Fade delay={1e3} damping={1e-1}>

                    <p className="p-8 font-bold text-orange-950">Hayo-Went-Ha Camps provide unforgettable summer camp experiences for boys and girls in beautiful northern Michigan. Every summer at Hayo-Went-Ha Camps is unique. For over 100 years, campers and staff from across the world with wildly different backgrounds assemble to forge their community, one anchored in the traditions of the thousands of participants that came before them.  Each for all, all for each, is the rallying cry of our campers and staff. We seek to lift one another to new heights of personal and collective accomplishment. Join us this summer and become part of something bigger than yourself.

                    </p>
                </Fade>

            </div>
            <div className="text-center">
                <button className="btn no-animation text-white bg-blue-950">Look Left Site</button>
            </div>
        </div>
    );
};

export default Design;