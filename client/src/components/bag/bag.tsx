import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppState } from '../../redux/AppState';

export default function Bag() {

    const orders = useSelector((state: AppState) => state.orders);

    return (
        <Container>
                <OrdersHeadline>Orders</OrdersHeadline>
                {orders.length > 0 
                    ?
                    orders.map((order:any, key:number) => (
                    <OrderContainer key={key}>
                        <OrderName>Dish: {order.name}</OrderName>
                        <OrderSide>Side Dish: {order.side}</OrderSide>
                        <OrderChanges>Changes: 
                            {order.changes.map((change:any, key:number) => (
                                <Change key={key}>{change}</Change>
                            ))}
                        </OrderChanges>
                    </OrderContainer>
                    ))
                    :    
                <NoOrders>No orders yet.. go shop!</NoOrders>
                }
        </Container>
    )
}

const NoOrders = styled.div`

`

const Container = styled.div`

`

const OrdersHeadline = styled.h1`

`

const OrderContainer = styled.div`

`

const OrderName = styled.div`

`

const OrderChanges = styled.div`

`

const OrderSide = styled.div`

`

const Change = styled.div`

`

