/**
 * @Name
 * @Description
 * @author PerkinsZhu
 * @date 2023/7/2 17:41
 **/
import type { RouteRecordRaw } from 'vue-router'

export interface UserState {
    token: string | null
    menuRoutes: RouteRecordRaw[]
}