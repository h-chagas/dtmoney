import { FormEvent, useState, useContext } from 'react'
import Modal from 'react-modal'
import { TransactionsContext } from '../../TransactionsContext'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, TransactionTypeContainer, RadioBox } from './styles'



interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void,

}


export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

const { createTransaction } = useContext(TransactionsContext); //this component is using CONTEXT

const [title, setTitle] = useState('');
const [amount, setAmount] = useState(0);
const [category, setCategory] = useState('');
const [type, setType] = useState('deposit');


function handleCreateNewTransaction(event: FormEvent) { // Faz o cadastro de uma nova transacao
    event.preventDefault()
   
}

createTransaction({ 
    title,
    amount,
    category,
    type

});



    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >

            <button 
            onClick={onRequestClose} 
            className="react-modal-close"
            >
                <img 
                src={closeImg} 
                alt="close button"
                />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                
                <h2>Register information</h2>
                <input 
                type="text" 
                placeholder='Title'
                value={title}
                onChange={event => setTitle(event.target.value)}
                />
                <input 
                type="number" 
                placeholder='Value'
                value={amount}
                onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                    type='button'
                    onClick={() => {setType('deposit')}}
                    isActive={type === 'deposit'}
                    activeColor="green"
                    >
                        <img src={incomeImg} alt="income img" />
                        <span>Income</span>
                    </RadioBox>

                    <RadioBox
                    type='button'
                    onClick={() => {setType('withdraw')}}
                    isActive={type === 'withdraw'}
                    activeColor="red"

                    >
                        <img src={outcomeImg} alt="income img" />
                        <span>Outcome</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                type="text" 
                placeholder='Category'
                value={category}
                onChange={event => setCategory(event.target.value)}

                />
                <button type='submit' >Register</button>
            </Container>


        </Modal>
    )
        ;
}