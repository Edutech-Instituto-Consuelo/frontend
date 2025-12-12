import { Td } from "./Td";
import { THead } from "./THead";
import type { ITableProps } from "./types";


export default function Table({ data, columns, customRender } : ITableProps) {
    const columnKeys = Object.keys(columns);

    return (
        <table className="black-text text-sm text-left leading-5 w-full border-spacing-0 border-separate border border-solid border-overlay rounded-[10px]">
            <THead columns={columns} />

            <tbody>
                { data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        { columnKeys.map((columnKey) => (
                            <Td { ...{
                                customRender,
                                row,
                                columnKey,
                                key: columnKey
                            } } />
                        )) }
                    </tr>
                )) }
            </tbody>
        </table>
    );
}


