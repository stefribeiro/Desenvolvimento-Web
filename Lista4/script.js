function autoResize()
{
    textArea = document.getElementById('areaDeEntrada');
    while (textArea.scrollHeight > textArea.offsetHeight)
    {
        textArea.rows += 1;
    }
}

