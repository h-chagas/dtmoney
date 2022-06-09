import { Container } from "./styles";
import IncomeImg from "../../assets/income.svg";
import Outcome from "../../assets/outcome.svg"
import Total from "../../assets/total.svg"
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";

export function Summary() {

    const { transactions } = useContext(TransactionsContext); //this component is using CONTEXT

    console.log(transactions)
    
    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={IncomeImg} alt="income img" />
                </header>
                <strong>£ 1,000.00</strong>
            </div>

            <div>
                <header>
                    <p>Outcome</p>
                    <img src={Outcome} alt="outcome img" />
                </header>
                <strong> - £ 600.00</strong>
            </div>

            <div className="highlighted-background">
                <header>
                    <p>Total</p>
                    <img src={Total} alt="total img" />
                </header>
                <strong>£ 400.00</strong>
            </div>
        </Container>
    );
}