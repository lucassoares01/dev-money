import styled from "styled-components";

export const ListModel = styled.div`
    width: 500px;
    height: 550px;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 8px 0px #000000; 
    box-shadow: 0px 0px 8px 0px #000000;
    background: #fff;
    
    .list-header{
        width: 100%;
        text-align: center;
        font-weight: bold;
        font-size: 25px;
        padding: 12px 0px;
        border-radius: 5px 5px 0px 0px;
    }

    .transactions-list{
        overflow: auto; 
        overflow-x: hidden;
        max-height: 492px;
    }

    .transactions-list li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 20px;
        font-size: 20px;
        border-bottom: 2px solid gray;
        font-weight: bold;
    }

    .transaction-right{
        display: flex;
        align-items: center;
        gap: 25px;
        flex-direction: row;
    }

    .remove-transaction{
        color: #fff;
        font-size: 12px;
        padding: 8px 12px;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.3s;
    }

    .remove-transaction:hover{
        opacity: 0.65;
    }
`;