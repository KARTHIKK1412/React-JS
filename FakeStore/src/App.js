import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';

export default function Tablet(){
    const [table,setTable]=useState([]);

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(response=>response.json())
      .then(json=>setTable(json))
    });
  
    return(
        <>
            <div className='conatainer text-center'>
                 <div className='table table-bordered '>              
                    {
                        table.map((value,index)=>(

                            <table>
                                <tbody>
                                    <thead>
                                        <tr>
                                        <th className='col-lg-2'>Product Image</th>
                                        <th className='col-lg-2'>Product Name</th> 
                                        <th className='col-lg-2'>Product Description</th>
                                        <th className='col-lg-2'>Product Rating</th>
                                        <th className='col-lg-2'>Product Category</th>
                                        <th className='col-lg-2'>Product count</th>
                                        </tr>
                                        
                                        <tr>
                                            <td><img className="image" height={100} src={value.image} alt="image"/></td>
                                            <td>{value.title}</td>
                                            <td>{value.description}</td>
                                            <td>{value.price}</td>
                                            <td>{value.category}</td>
                                            <td>{value.rating.count}</td>
                                        </tr>
                                    </thead>
                                </tbody>
                            </table>
                        ))
                    }
                </div>
        </div>    
        </>
    );
}