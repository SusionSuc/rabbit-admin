import { get, post } from './http'

export const getPageList = p => get('/apmdb/page-speed/speed-list', p)
