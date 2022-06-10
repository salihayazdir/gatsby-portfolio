import React from 'react'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'

export const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        )
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2 className='text-3xl mt-6 mb-4'>{children}</h2>
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className='mb-4'>{children}</p>
      },
    },
  }

  //  * Map of all Contentful block types. Blocks contain inline or block nodes.

//  export enum BLOCKS {
//   DOCUMENT = 'document',
//   PARAGRAPH = 'paragraph',

//   HEADING_1 = 'heading-1',
//   HEADING_2 = 'heading-2',
//   HEADING_3 = 'heading-3',
//   HEADING_4 = 'heading-4',
//   HEADING_5 = 'heading-5',
//   HEADING_6 = 'heading-6',

//   OL_LIST = 'ordered-list',
//   UL_LIST = 'unordered-list',
//   LIST_ITEM = 'list-item',

//   HR = 'hr',
//   QUOTE = 'blockquote',

//   EMBEDDED_ENTRY = 'embedded-entry-block',
//   EMBEDDED_ASSET = 'embedded-asset-block',

//   TABLE = 'table',
//   TABLE_ROW = 'table-row',
//   TABLE_CELL = 'table-cell',
//   TABLE_HEADER_CELL = 'table-header-cell',
// }



//  * Map of all Contentful marks.

//  enum MARKS {
//   BOLD = 'bold',
//   ITALIC = 'italic',
//   UNDERLINE = 'underline',
//   CODE = 'code',
// }


//  * Map of all Contentful inline types. Inline contain inline or text nodes.

//  export enum INLINES {
//   HYPERLINK = 'hyperlink',
//   ENTRY_HYPERLINK = 'entry-hyperlink',
//   ASSET_HYPERLINK = 'asset-hyperlink',
//   EMBEDDED_ENTRY = 'embedded-entry-inline',
// }