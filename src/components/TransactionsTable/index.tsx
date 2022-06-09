import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";


export function TransactionTable() {

    const transactions = useContext(TransactionsContext);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('en-UK', {
                                        style: 'currency',
                                        currency: 'GBP'
                                    }).format(transaction.amount)}
                                    </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('en-UK')
                                    .format(new Date(transaction.createdAt)
                                )}
                                </td>
                            </tr>
                        );

                    })}
                </tbody>
            </table>
        </Container>
    );
}