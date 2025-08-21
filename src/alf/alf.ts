import { createDynamicAtom } from './create_dynamic_atom'

export function alf(spaces: Record<string, number>) {
  const textStyles = createDynamicAtom(spaces, {
    field: 'text',
    values: ['fontSize'],
  })

  const styles = {
    debug: {
      borderColor: 'red',
      borderWidth: 1,
    },

    /*
     * Positioning
     */
    absolute: {
      position: 'absolute',
    },
    relative: {
      position: 'relative',
    },
    inset_0: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    overflow_hidden: {
      overflow: 'hidden',
    },
    /*
   * Width
   */
    w_full: {
      width: '100%',
    },
    h_full: {
      height: '100%',
    },

    /*
   * Theme-independent bg colors
   */
    bg_transparent: {
      backgroundColor: 'transparent',
    },
    bg_none: {
      backgroundColor: undefined,
    },

    /*
   * Flex
   */
    flex_0: {
      flex: 0,
    },
    flex_1: {
      flex: 1,
    },
    flex_col: {
      flexDirection: 'column',
    },
    flex_row: {
      flexDirection: 'row',
    },
    flex_col_reverse: {
      flexDirection: 'column-reverse',
    },
    flex_row_reverse: {
      flexDirection: 'row-reverse',
    },
    flex_wrap: {
      flexWrap: 'wrap',
    },
    flex_grow: {
      flexGrow: 1,
    },
    flex_shrink: {
      flexShrink: 1,
    },
    flex_shrink_0: {
      flexShrink: 0,
    },
    justify_start: {
      justifyContent: 'flex-start',
    },
    justify_center: {
      justifyContent: 'center',
    },
    justify_between: {
      justifyContent: 'space-between',
    },
    justify_end: {
      justifyContent: 'flex-end',
    },
    align_center: {
      alignItems: 'center',
    },
    align_start: {
      alignItems: 'flex-start',
    },
    align_end: {
      alignItems: 'flex-end',
    },
    align_baseline: {
      alignItems: 'baseline',
    },
    align_stretch: {
      alignItems: 'stretch',
    },
    self_auto: {
      alignSelf: 'auto',
    },
    self_start: {
      alignSelf: 'flex-start',
    },
    self_end: {
      alignSelf: 'flex-end',
    },
    self_center: {
      alignSelf: 'center',
    },
    self_stretch: {
      alignSelf: 'stretch',
    },
    self_baseline: {
      alignSelf: 'baseline',
    },
    /*
   * Text
   */
    text_left: {
      textAlign: 'left',
    },
    text_center: {
      textAlign: 'center',
    },
    text_right: {
      textAlign: 'right',
    },
    ...textStyles,

    /*
   * Border
   */
    border_0: {
      borderWidth: 0,
    },
    border: {
      borderWidth: '__STYLE_SHEET_HAIRLINE_WIDTH__',
    },
    border_t: {
      borderTopWidth: '__STYLE_SHEET_HAIRLINE_WIDTH__',
    },
    border_b: {
      borderBottomWidth: '__STYLE_SHEET_HAIRLINE_WIDTH__',
    },
    border_l: {
      borderLeftWidth: '__STYLE_SHEET_HAIRLINE_WIDTH__',
    },
    border_r: {
      borderRightWidth: '__STYLE_SHEET_HAIRLINE_WIDTH__',
    },
    /*
   * rounded
   */
    rounded_full: {
      borderRadius: 9999,
    },
    rounded_none: {
      borderRadius: 0,
    },
    ...createDynamicAtom(spaces, {
      field: 'rounded',
      values: ['borderRadius'],
    }),
    /*
   * Padding
   */
    p_0: {
      padding: 0,
    },
    ...createDynamicAtom(spaces, {
      field: 'p',
      values: ['padding'],
    }),
    px_0: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    ...createDynamicAtom(spaces, {
      field: 'px',
      values: ['paddingLeft', 'paddingRight'],
    }),
    py_0: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    ...createDynamicAtom(spaces, {
      field: 'py',
      values: ['paddingTop', 'paddingBottom'],
    }),
    pt_0: {
      paddingTop: 0,
    },
    ...createDynamicAtom(spaces, {
      field: 'pt',
      values: ['paddingTop'],
    }),
    pb_0: {
      paddingBottom: 0,
    },
    ...createDynamicAtom(spaces, {
      field: 'pb',
      values: ['paddingBottom'],
    }),
    pl_0: {
      paddingLeft: 0,
    },
    ...createDynamicAtom(spaces, {
      field: 'pl',
      values: ['paddingLeft'],
    }),
    pr_0: {
      paddingRight: 0,
    },
    ...createDynamicAtom(spaces, {
      field: 'pr',
      values: ['paddingRight'],
    }),
    /*
   * Margin
   */
    m_0: {
      margin: 0,
    },
    ...createDynamicAtom(spaces, {
      field: 'm',
      values: ['margin'],
    }),
    mx_0: {
      marginLeft: 0,
      marginRight: 0,
    },
    ...createDynamicAtom(spaces, {
      field: 'mx',
      values: ['marginLeft', 'marginRight'],
    }),
    my_0: {
      marginTop: 0,
      marginBottom: 0,
    },
    ...createDynamicAtom(spaces, {
      field: 'my',
      values: ['marginTop', 'marginBottom'],
    }),
    mt_0: {
      marginTop: 0,
    },
    ...createDynamicAtom(spaces, {
      field: 'mt',
      values: ['marginTop'],
    }),
    mb_0: {
      marginBottom: 0,
    },
    ...createDynamicAtom(spaces, {
      field: 'mb',
      values: ['marginBottom'],
    }),
    ml_0: {
      marginLeft: 0,
    },
    ...createDynamicAtom(spaces, {
      field: 'ml',
      values: ['marginLeft'],
    }),
    mr_0: {
      marginRight: 0,
    },
    ...createDynamicAtom(spaces, {
      field: 'mr',
      values: ['marginRight'],
    }),

    /*
   * Display
   */
    hidden: {
      display: 'none',
    },
  }

  return JSON.stringify(styles, null, 2)
    .replace(/"__STYLE_SHEET_HAIRLINE_WIDTH__"/g, 'StyleSheet.hairlineWidth')
}
