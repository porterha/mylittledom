export let flags = {

    ELEMENT_HAS_DIRTY_NODE_LIST:          (1 << 0),
    ELEMENT_HAS_DIRTY_FOCUS_LIST:         (1 << 1),
    ELEMENT_HAS_DIRTY_RENDER_LIST:        (1 << 2),

    ELEMENT_HAS_DIRTY_LAYOUT:             (1 << 3),
    ELEMENT_HAS_DIRTY_CLIPPING:           (1 << 4),

    ELEMENT_HAS_DIRTY_LAYOUT_CHILDREN:    (1 << 5),
    ELEMENT_HAS_DIRTY_CLIPPING_CHILDREN:  (1 << 6)

};

flags.ELEMENT_IS_DIRTY = (

    flags.ELEMENT_HAS_DIRTY_NODE_LIST |
    flags.ELEMENT_HAS_DIRTY_FOCUS_LIST |
    flags.ELEMENT_HAS_DIRTY_RENDER_LIST |

    flags.ELEMENT_HAS_DIRTY_LAYOUT |
    flags.ELEMENT_HAS_DIRTY_CLIPPING |

    flags.ELEMENT_HAS_DIRTY_LAYOUT_CHILDREN |
    flags.ELEMENT_HAS_DIRTY_CLIPPING_CHILDREN

);
