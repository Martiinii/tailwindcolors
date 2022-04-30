import { useContext, useEffect, useMemo, useState } from "react";
import ColorsContext from "./ColorsContext";

const copy = text => {
    navigator.clipboard.writeText(text);
}

const Color = ({ color, number, top, bottom, first, last }) => {
    const textColor = `text-${color}-${number}`;
    const bgColor = `bg-${color}-${number}`;

    const [copied, setCopied] = useState(false);
    const context = useContext(ColorsContext);

    const leftClick = () => {
        copy(textColor);
        setCopied(true);
        context.setCurrentText(textColor);
    }

    const rightClick = (e) => {
        e.preventDefault();
        copy(bgColor);
        setCopied(true);
        context.setCurrentBg(bgColor);
    }

    useEffect(() => {
        if (copied) {
            let x = setTimeout(() => {
                setCopied(false);
            }, 300)

            return () => {
                clearTimeout(x);
            }
        }
    }, [copied])

    let className = useMemo(() => {
        if (top && first) return 'rounded-tl-xl';
        if (top && last) return 'rounded-tr-xl';
        if (bottom && first) return 'rounded-bl-xl';
        if (bottom && last) return 'rounded-br-xl';
        return ''
    }, [top, bottom, first, last])

    return (
        <div className="text-center">
            <button
                className={`w-10 grid place-items-center aspect-square group ${className} bg-${color}-${number}`}
                onClick={leftClick}
                onContextMenu={rightClick}
            >
                <span className={`opacity-0 group-hover:opacity-100 transition-opacity duration-75 select-none font-mono ${number < 500 ? "text-black" : "text-white"}`}>{copied ? "✅" : number}</span>
            </button>
        </div>
    )
}

export default Color;