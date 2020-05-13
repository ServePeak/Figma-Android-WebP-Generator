const DEFAULT_EXPORT = ExportSettings = {
  format: 'PNG',
  constraint: {
    type: 'HEIGHT',
    value: 150
  }
}

function exportSize(size) {
  return {
    format: 'PNG',
    constraint: {
      type: 'SCALE',
      value: size
    }
  }
}

async function saveAsWebp(node) {
  if (node.type == 'FRAME') {
    const pngArray = []
    pngArray.push(await node.exportAsync(DEFAULT_EXPORT))
    for (let i = 1; i < 6; i++) {
      pngArray.push(await node.exportAsync(exportSize(i))
    }
    figma.ui.postMessage(pngArray)
  }
}

Promise.all(figma.currentPage.selection.map(selected => saveAsWebp(selected)))
figma.showUI(__html__)