import {createRef, useEffect} from "react";

export default function Home() {
    const ref = createRef();

    useEffect(() => {
        if (ref) {
            const doc = ref.current.contentDocument;
            const label = doc.getElementById('label');
            const input = doc.getElementById('input');

            label.onclick = function() {
                input.style.display = "block";
                label.style.display = "none";
                input.value = label.innerText;
            }
            input.onblur = function() {
                if (input.value.length) {
                    input.style.display = "none";
                    label.style.display = "block";
                    label.innerText = input.value;
                    return;
                }
                input.focus();
            }
        }
    }, [ref])

    return (
        <div>
            <h1>INDEX PAGE</h1>
            <iframe ref={ref} title="Iframe Example" src={"../html/content_1.html"} />
        </div>
    )
}