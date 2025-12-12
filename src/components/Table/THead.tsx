import type { TColumns } from "./types";

export function THead ({ columns } : { columns: TColumns }) {
    return (
        <thead>
            <tr>
                { Object.keys(columns).map((key) => (
                    <th key={key} className="font-normal h-10 px-2">{ columns[key] }</th>
                )) }
            </tr>
        </thead>
    );
}
