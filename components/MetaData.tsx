import React from 'react';
import {Helmet} from 'react-helmet';
const MetaData = ({title} : any) => {
    return (
        <Helmet>
            <title>{`${title} | Embedded Kernel`}</title>
        </Helmet>
    )
}
export default MetaData
