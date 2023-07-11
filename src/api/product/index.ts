/*
* @Name 
* @Description 
* @author PerkinsZhu
* @date 2023/7/11 10:00 
**/

import request from "@/utils/request.ts";

enum API {
  TRADEMARK_LIST = "/admin/product/baseTrademark",
}

export const trademarkList = (page: number, limit: number) =>
  request.get<any, any>(API.TRADEMARK_LIST + "/" + page + "/" + limit);
