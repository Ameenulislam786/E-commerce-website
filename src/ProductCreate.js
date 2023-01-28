import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function ProductCreate() {
    const [name, setName] = useState('');
    const [disc, setDisc] = useState('');
    const [price, setPrice] = useState('');
    const Navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();  //prevent to submit form on same page
        const product = { name, disc, price };
        fetch('api/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)

        }).then(() => {
            console.log('new Product Added');
            Navigate('/contact')
        })
    }
    return (
        <div className='container form'>
            <div className='row '>
                <div className='col-md-4 '>
                    <form onSubmit={handleSubmit} className='form-control p-4 shadow-lg bg-body rounded'>
                    <h1>Product Create</h1>

                        <label className='form-label'>Product name</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            className='form-control' />


                        <label className='form-label'>Product Description</label>
                        <input
                            type="text"
                            required
                            value={disc}
                            onChange={(e) => { setDisc(e.target.value) }}
                            className='form-control' />


                        <label className='form-label'>Price</label>
                        <input
                            type="text"
                            required
                            value={price}
                            onChange={(e) => { setPrice(e.target.value) }}
                            className='form-control' />
                        <br></br>
                        <button className='btn btn-primary form-control'>Save Records</button>
                    </form>

                </div>

                <div className='col-md-4'>
                    {name}
                    <br></br>
                    {disc}
                    <br></br>
                    {price}
                </div>
            </div>

        </div>
    );
}

export default ProductCreate;