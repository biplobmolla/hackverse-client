import React from 'react';


const ProfileInfoSection = ({data}) => {
    return ( 
        <div className='bg-white px-5 py-5 mt-5'>
            <h4 className='font-semibold text-sm'>{data.title}</h4>
            {data.experienc_data.map(ex_data=>(
                <div className="flex mt-4">
                    <img src={ex_data.img} alt="" className='w-16 h-16 rounded' />
                    <div className='ml-4'>
                        <h3 className='text-base font-bold'>{ex_data.title}</h3>
                        <h5 className='text-sm font-semibold'>{ex_data.company}</h5>
                        <h6 className='text-xs font-semibold'>{ex_data.year}</h6>
                    </div>
                </div>
            ))}
            
        </div>
     );
}
 
export default ProfileInfoSection;