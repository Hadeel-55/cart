import {useContext} from 'react';
import {CartContext} from '../context/CartContext';
import {Card, Button , ListGroup, Form ,Row ,Col} from 'react-bootstrap';
import {FaTrash} from 'react-icons/fa';

const CartItem = ({item}) =>{

    const {removeFromCart ,updateQuantity} = useContext(CartContext);
    return(
        <ListGroup.Item className='border-0 shadow-sm rounded-4 mb-3 py-3 px-3'> 

<Row className='align-items-center'>
<Col md={4} className='d-flex algin-items-center gap-3 '>
<img 
src={item.image}
alt={item.name}
className='rounded'
style={{width:'60px', height:'60px ', objectFit:'cover'}} />


<div className='fw-semibold'>
    {item.name}

</div>
</Col>

<Col md={3} className='my-2 my-md-0'>
<Form.Control 
 type='number'
 min='1' 
 value={item.quantity}
 onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
 className='text-center rounded-pill shadow-sm'
 style={{maxWidth:'80px', margin:'0 auto'}}
/>


</Col>



<Col md={3} className='fw-bold text-primary '>
{item.price * item.quantity.toFixed(2)} USD 

</Col>


<Col md={2} className='text-primary fw-bold '>
<Button 
variant='outline-danger'
className='rounded-pill d-flex align-items-center gap-2 mx-auto '
onClick={()=> removeFromCart(item.id)}
>
<FaTrash />
Remove
</Button>
</Col>

</Row>
        </ListGroup.Item>
    )

}
export default CartItem;