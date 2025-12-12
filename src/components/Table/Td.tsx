import type { TObj, TCustomRender } from "./types";

export function Td ({ customRender, row, columnKey } : { row: TObj, columnKey: string, customRender?: TCustomRender }) {
    return (
        <td className="py-2 px-4 align-top border-t border-solid border-overlay">
            { customRender && customRender[columnKey]
                ? customRender[columnKey](row, columnKey)
                : row[columnKey]
            }
        </td>
    );
}