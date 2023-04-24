export default async function decorate(block) {
    const quoteDiv = block.querySelector(':scope > div > div');
    const blockquote = document.createElement('blockquote');
    blockquote.innerHTML = quoteDiv.innerHTML;
    quoteDiv.replaceWith(blockquote);
    const authorDiv = block.querySelector('div:nth-child(2)');
    if (authorDiv) {
    const p = document.createElement('p');
    p.innerHTML = `<strong><em>${authorDiv.innerHTML}</em></strong>`;
    authorDiv.replaceWith(p);
    }
}