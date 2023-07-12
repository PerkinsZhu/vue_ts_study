/*
* @Name 
* @Description 
* @author PerkinsZhu
* @date 2023/7/11 10:00 
**/

import request from "@/utils/request.ts";

enum API {
  TRADEMARK_LIST = "/admin/product/baseTrademark",
  TRADEMARK_SAVE = "/admin/product/baseTrademark/save",
  TRADEMARK_UPDATE = "/admin/product/baseTrademark/update",
}

export const trademarkList = (page: number, limit: number) =>
  request.get<any, any>(API.TRADEMARK_LIST + "/" + page + "/" + limit);

export const trademarkSaveOrUpdate = (data: any) => {
  if (data.id) {
    return request.put<any, any>(API.TRADEMARK_UPDATE, data);
  } else {
    return request.post<any, any>(API.TRADEMARK_SAVE, data);
  }
};
