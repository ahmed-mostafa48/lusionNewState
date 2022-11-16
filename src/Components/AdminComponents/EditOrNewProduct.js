import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap'
import Store from '../../Context/Store'
import '../../Style/EditOrNewProduct.css'
import { useParams } from 'react-router-dom'


const EditOrNewProduct = (props) => {

    const context = useContext(Store)
    const navigate = useNavigate()

    const [type , setType] = useState('')
    const [typeCheck , setTypeCheck] = useState(null)
    const [typeText , setTypeText] = useState('Type')
    
    const [brand , setBrand] = useState('')
    const [brandCheck , setBrandCheck] = useState(null)
    const [brandText , setBrandText] = useState('Brand')

    const [price, setPrice] = useState(0)
    const [priceCheck , setPriceCheck] = useState(null)
    const [priceText , setPriceText] = useState('Price')

    const [sizes , setSizes] = useState([])
    const [sizesCheck , setSizesCheck] = useState(null)
    const [sizesText , setSizesText] = useState('Sizes')
    // const [sizesBox , setSizesBox] = useState(false)
    const [xsSize , setXsSize] = useState(false)
    const [sSize , setSSize] = useState(false)
    const [mSize , setMSize] = useState(false)
    const [lSize , setLSize] = useState(false)
    const [xlSize , setXLSize] = useState(false)





    const [colorsInput , setColorsInput] = useState('')
    const [colors , setColors] = useState([])
    const [colorsCheck , setColorsCheck] = useState(null)
    const [colorsText , setColorsText] = useState('Colors')

    // const [photoInput, setPhotoInput] = useState('')
    const [photo, setPhoto] = useState('')
    const [photoCheck , setPhotoCheck] = useState(null)
    const [photoText , setPhotoText] = useState('Image url')

    const [avalibale , setAvalibale] = useState(1)
    const [avalibaleCheck , setAvalibaleCheck] = useState(null)
    const [avalibaleText , setAvalibaleText] = useState('Avalibale In Stock')

    const [count , setCount] = useState(0)
    const [countCheck , setCountCheck] = useState(null)
    const [countText , setCountText] = useState('Count')


    const [loading, setLoading] = useState(false);

    const {ID} = useParams()

    const [axiosUrl, setAxiosUrl] = useState('');
    const [axiosMethod, setAxiosMethod] = useState('');

    

    const productsFormReset = (e)=>{
        e.preventDefault()

        setType('')
        setBrand('')

        setPhoto('')
        // setPhotoInput('')
        setPrice(0)
        setAvalibale(1)

        setColorsInput('')
        setColors([])

        setSizes([])
        setXsSize(false)
        setSSize(false)
        setMSize(false)
        setLSize(false)
        setXLSize(false)


        

        setTypeCheck(null)
        setBrandCheck(null)
        setPriceCheck(null)
        setSizesCheck(null)
        setColorsCheck(null)
        setPhotoCheck(null)
        setAvalibaleCheck(null)


        setTypeText('Type')
        setBrandText('Brand')
        setPriceText('Price')
        setSizesText('Sizes')
        setColorsText('Colors')
        setPhotoText('Image url')
        setAvalibaleText('Avalibale In Stock')





    }



 useEffect(()=>{

    if (props.action === 'add') {
        setAxiosUrl('http://localhost:9000/shopProducts')
        setAxiosMethod('post')
    }

    else if ( props.action === 'edit' ) {
        
        setAxiosUrl(`http://localhost:9000/shopProducts/${ID}`)
        setAxiosMethod('put')


        axios({
            method : 'get',
            url : `http://localhost:9000/shopProducts/${ID}`
        }).then((info)=>{
            console.log(info.data)
            setType(info.data.type)
            setBrand(info.data.brand)
            setPrice(info.data.price)
            setAvalibale(info.data.avalibale)
            setPhoto(info.data.photo)
            setCount(info.data.count)
            setColors(info.data.colors)
            setSizes(info.data.sizes)

           info.data.sizes.includes('XS') && setXsSize(true)
           info.data.sizes.includes('S') && setSSize(true)
           info.data.sizes.includes('M') && setMSize(true)
           info.data.sizes.includes('L') && setLSize(true)
           info.data.sizes.includes('XL') && setXLSize(true)


        })
    }
 },[])

    

    const sizesBoxChange = (e , size , setSize)=>{
        setSize(!size)

        let sizesTemp = sizes

        if(e.currentTarget.checked == true ) {
          sizesTemp.push(e.currentTarget.value)
        }
        
        else if(e.currentTarget.checked == false ) {
            sizesTemp = sizes.filter((size)=>{
                return e.currentTarget.value !== size
             })
        }
             setSizes(sizesTemp)
        
    }


    
    const addColor = ()=>{
        
        if (colorsInput !== '' && !colors.includes(colorsInput) && !colorsInput.includes(' ') ) {
            let colorsTemp = colors
            colorsTemp.push(colorsInput)
            setColors(colorsTemp)

            setColorsInput('')

            setColorsCheck(null)
            setColorsText('Colors')
        }
        else if(colors.includes(colorsInput)){
            setColorsCheck(false)
            setColorsText('Color exists')
        }
        else{
            setColorsCheck(false)
            setColorsText('invalid Color')
        }
        
    }

    const removeColor = (color)=>{
        

        let colorsTemp = colors.filter((col)=>{
            return col !== color
        })

        setColors(colorsTemp)

    }
    

    const productsFormSubmit = (e)=>{
        e.preventDefault()

      
         
// axios.get(photo)
// .then((info)=>{
//   if (info.status=== 200) {
//     setPhoto(photo)
//   }
    
// })
// .catch((err)=>{
//     console.log(err);
//     if (err.request.status !== 200) {
//         setPhoto('https://i.ibb.co/XVsKqy5/default-product-image.webp')
//     }
// })




    
//  let myPromise = new Promise((res,rej)=>{
        
        
//         axios.get(photoInput)
//         .then((info)=>{
//               if (info.status === 200) {
//                 res(photoInput)
//               }
                
//         })
//         .catch((err)=>{
         
//                 if (err.request.status !== 200 || err.response.status !== 200) {
//                     console.log(err);
//                     rej('https://i.ibb.co/XVsKqy5/default-product-image.webp')
    
//                 }
            
           
//         })
        
        
        
//     })
//     .then((inpPhoto)=> setPhoto(inpPhoto)) 
//     .catch((defaultPhoto)=> setPhoto(defaultPhoto))




        let ty =  context.storeCheckReturn(setTypeText,'Type',setTypeCheck , true, null  , (type.length < 3) )
        let br =  context.storeCheckReturn(setBrandText,'Brand',setBrandCheck , true, null  , (brand.length < 3) )
        let pr =  context.storeCheckReturn(setPriceText,'Price',setPriceCheck , true, null  , (price < 1) )
        let av =  context.storeCheckReturn(setAvalibaleText,'Avalibale In Stock',setAvalibaleCheck , true, null  , (avalibale < 1) )
        let img = context.storeCheckReturn(setPhotoText,'Image url',setPhotoCheck , true, null  ,  (photo === '') )
        let col =  context.storeCheckReturn(setColorsText,'Colors',setColorsCheck , true, null  , (colors.length <= 0) )
        let siz =  context.storeCheckReturn(setSizesText,'Sizes',setSizesCheck , true, null  , (sizes.length <= 0) )


        if (ty && br && pr && av && img && col && siz ) {
        // if (ty && br && pr && av && col && siz ) {


            setLoading(true)

            axios({
                method : axiosMethod,
                url : axiosUrl,
                data : {
                    type,
                    brand,
                    price,
                    avalibale,
                    photo,
                    colors,
                    sizes,
                    count
                }

            }).then(()=>{
                  setTimeout(()=>{
                        setLoading(false)
                    },2000)

                    setTimeout(()=>{
                        navigate('/dashboard/products/',{state :{sucessMessageProducts : props.sucessMessageProducts }})
                    },2200)
            })
        }



    
    }

 




  return (
    <div className='bg-light Products-newedit-div d-flex flex-column justify-content-between align-items-center ' >

         <div className='bg-white d-flex flex-column justify-content-between align-items-center border border-2 Products-newedit-div2 mt-4 '>

            <h1 className='text-success mt-2 head-text-pr'>{props.headText}</h1>
       
            <Form onSubmit={productsFormSubmit} onReset={productsFormReset}  className='products-form d-flex flex-column justify-content-around   ' >
    
                <FormGroup className=" groups-products ">
                    <Label for="typeIn" className={typeCheck === false ? 'text-danger fw-bold lab-newedit-product' : 'text-info fw-bold lab-newedit-product2'} >{typeText}</Label>
                    <Input type='text' id='typeIn'  valid={typeCheck && true }  invalid={typeCheck === false ? true : undefined}   value={type} onChange={(e)=>{ setType(e.currentTarget.value) }}   placeholder='Enter Product Type' />                   
                </FormGroup>


                <FormGroup className=" groups-products ">
                    <Label for="brandIn" className={brandCheck === false ? 'text-danger fw-bold lab-newedit-product' : 'text-info fw-bold lab-newedit-product2'} >{brandText}</Label>
                    <Input type='text' id='brandIn'  valid={brandCheck && true }  invalid={brandCheck === false ? true : undefined}   value={brand} onChange={(e)=>{ setBrand(e.currentTarget.value) }}   placeholder='Enter Product Brand' />                   
                </FormGroup>

                <FormGroup className=" groups-products ">
                    <Label for="priceIn" className={priceCheck === false ? 'text-danger fw-bold lab-newedit-product' : 'text-info fw-bold lab-newedit-product2'} >{priceText}</Label>
                    <Input type='number' id='priceIn'  valid={priceCheck && true }  invalid={priceCheck === false ? true : undefined}   value={price} onChange={(e)=>{ setPrice(e.currentTarget.value) }}   placeholder='Enter Product Price' />                   
                </FormGroup>

                <FormGroup className=" groups-products ">
                    <Label for="avalibaleIn" className={avalibaleCheck === false ? 'text-danger fw-bold lab-newedit-product' : 'text-info fw-bold lab-newedit-product'} >{avalibaleText}</Label>
                    <Input type='number' id='avalibaleIn'  valid={avalibaleCheck && true }  invalid={avalibaleCheck === false ? true : undefined}   value={avalibale} onChange={(e)=>{ setAvalibale(e.currentTarget.value) }}   placeholder='Enter avalibale items in stock' />                   
                </FormGroup>

                <FormGroup className=" groups-products ">
                    <Label for="photoIn" className={photoCheck === false ? 'text-danger fw-bold lab-newedit-product' : 'text-info fw-bold lab-newedit-product2'} >{photoText}</Label>
                    {/* <Input type='text' id='photoIn'  valid={photoCheck && true }  invalid={photoCheck === false ? true : undefined}   value={photoInput} onChange={(e)=>{ setPhotoInput(e.currentTarget.value) }}   placeholder="Enter Product's Image url" />                    */}
                    <Input type='text' id='photoIn'  valid={photoCheck && true }  invalid={photoCheck === false ? true : undefined}   value={photo} onChange={(e)=>{ setPhoto(e.currentTarget.value) }}   placeholder="Enter Product's Image url" />                   
                    <FormText className='im-product-tx'>EX: https://i.ibb.co/XVsKqy5/default-product-image.webp</FormText>
                </FormGroup>

              


                <div  className='text-dark  d-flex flex-column justify-content-around align-items-start sizes-div'>
                    <Label className={sizesCheck === false ? 'text-danger fw-bold lab-newedit-product' : 'text-info fw-bold lab-newedit-product2'} >{sizesText}</Label>
                    <div>
                      
                        <FormGroup check inline >
                            <Input type="checkbox" value='XS'  checked={ xsSize} onChange={(e)=>sizesBoxChange(e, xsSize , setXsSize)} />
                            <Label check> XS</Label>
                        </FormGroup>
                        
                        <FormGroup check inline >
                            <Input type="checkbox"  value='S' checked={ sSize} onChange={(e)=>sizesBoxChange(e, sSize , setSSize)} />
                            <Label check>S</Label>
                        </FormGroup>

                        <FormGroup check inline >
                            <Input type="checkbox"  value='M'  checked={ mSize}  onChange={(e)=>sizesBoxChange(e, mSize ,setMSize )} />
                            <Label check> M</Label>
                        </FormGroup>
                        
                        <FormGroup check inline >
                            <Input type="checkbox" value='L'  checked={ lSize}  onChange={(e)=>sizesBoxChange(e, lSize , setLSize)}  />
                            <Label check>L</Label>
                        </FormGroup>

                        <FormGroup check inline >
                            <Input type="checkbox"  value='XL' checked={ xlSize}  onChange={(e)=>sizesBoxChange(e, xlSize , setXLSize)} />
                            <Label check>XL</Label>
                        </FormGroup>
                    </div>
                </div>

                <FormGroup className=" groups-products mt-3">
                    <Label for="ColorsIn" className={colorsCheck === false ? 'text-danger fw-bold lab-newedit-product' : 'text-info fw-bold lab-newedit-product2'} >{colorsText}</Label>
                                      
                    <Input type='text' id='ColorsIn'  valid={colorsCheck && true }  invalid={colorsCheck === false ? true : undefined}   value={colorsInput} onChange={(e)=>{ setColorsInput(e.currentTarget.value) }}   placeholder='Enter Product Colors' />
                    
                    <Button color='success'  className='my-2 confirm-col-btn' size='sm' onClick={addColor} >Confirm Color</Button>

                    <div>
                        {
                        colors.map((color,i)=>(
                            <div key={i} className='border border-2 border-warning  d-flex flex-column justify-content-around align-items-center' >
                                <h6 className='text-dark'>color {i} : <span className='text-black-50'>{color}</span> </h6>
                                <h6 className='text-danger d-inline-block cursor-pointer ' onClick={()=>removeColor(color)}  >remove</h6>
                            </div>
                        ))}
                    </div>
                </FormGroup>

                <FormGroup className='Products-addedit-btns d-flex'>

                    <Button  type='submit' color='success' className='btn-products-submit d-flex  justify-content-center align-items-center me-3'>
                        <ClipLoader size={20} color="#ffffff" className={loading ? 'me-3' : 'd-none'}/>
                        {props.btnText}</Button>

                    <Button  type='reset' color='danger' className='btn-products-submit' >Reset</Button>

                </FormGroup>

            </Form>
        </div>

    </div>
  )
}

export default EditOrNewProduct