

export function removeElement() {
    var count = 0;
    var interval;
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }
    interval = setInterval(function () {
        if (count == 20) {
            clearInterval(interval);
            count = 0;
        } else {
            count = count + 1;
            document.getElementsByClassName('_1DrF-Ndoxy1b882RZcUtzX _1bKOWZpFDSZMyGm5qZHZAU')[0].remove();
        }
    }, 200);
}


export function changeData1688() {
    var count = 0;
    var interval;
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }
    interval = setInterval(function () {
        if (count == 20) {
            clearInterval(interval);
            count = 0;
        } else {
            count = count + 1;
            //                document.getElementsByClassName('text')[0].textContent = 'Chon mau sac kich co';  // ban dau
            document.getElementsByClassName('takla-item-text J_SkuBtnText')[0].textContent = 'Chon mau sac kich co';
            //                document.getElementsByClassName('detail-attribute-item')[0].innerText = 'Thong tin chi tiet';
        }
    }, 200);
}

export function changeDataTaobao() {
    var count = 0;
    var interval;
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }
    interval = setInterval(function () {
        if (count == 20) {
            clearInterval(interval);
            count = 0;
        } else {
            count = count + 1;
            //bo sung
            //               var parent = document.getElementsByTagName('html')[0];
            ////               var meta = document.createElement('meta');
            //               var attr = document.createAttribute("charset");
            ////               var attr = document.createAttribute("lang");
            ////               attr.value = "vi-VN";
            //               attr.value = "utf-8";
            //                parent.setAttributeNode(attr);
            //                parent.appendChild(meta);

            var subTitleCount = document.getElementsByClassName('card-subtitle').length;
            if (subTitleCount === 3) {
                document.getElementsByClassName('card-subtitle')[1].innerHTML = 'Chon mau sac kich co';
                document.getElementsByClassName('card-subtitle')[2].innerText = 'THONG TIN CHI TIET SAN PHAM';
            } else {
                document.getElementsByClassName('card-subtitle')[0].innerHTML = 'Chon mau sac kich co';
                document.getElementsByClassName('card-subtitle')[1].innerText = 'THONG TIN CHI TIET SAN PHAM';
            }
        }
    }, 200);
}

export function removeElementTmall() {
    var count = 0;
    var interval;
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }
    interval = setInterval(function () {
        if (count == 20) {
            clearInterval(interval);
            count = 0;
        } else {
            count = count + 1;
            document.getElementsByClassName('_1U0GDtO1C7dAkY5Dds1nKD _3gdW50aaCACeVr7LmzaPvq')[0].remove();
        }
    }, 200);
}
//
//function removeElement1688(){
//    var count = 0;
//    var interval;
//    if(interval !== null){
//        clearInterval(interval);
//        interval = null;
//    }
//    interval = setInterval(function(){
//        if(count == 20){
//            clearInterval(interval);
//            count = 0;
//        }else{
//            count = count + 1;
//            document.getElementsByClassName('roc-downbanner')[0].remove();
//        }
//    },200);
//}



export function getDetailsInfomation() {
    var count = 0;
    var interval;
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }
    interval = setInterval(function () {
        if (count == 100) {
            clearInterval(interval);
            //            Android.timeout();
            count = 0;
        } else {
            count = count + 1;
            var dataValue = "";
            var property = "";
            var lengthModal = "";
            var modelItemPidLength = document.getElementsByClassName('modal-sku-content').length;
            var lengthModalNoActive = document.getElementsByClassName('modal-sku-content-item').length;


            lengthModal = document.getElementsByClassName('modal-sku-content-item modal-sku-content-item-active').length;
            if (lengthModal > 0) {
                for (var i = 0; i < lengthModal; i++) {
                    var separate = "";
                    if (i == lengthModal - 1) {
                        separate = "";
                    } else {
                        separate = ";";
                    }
                    property = property + document.getElementsByClassName('modal-sku-content-item modal-sku-content-item-active')[i].textContent + separate;
                    //                      property= document.getElementsByClassName("modal-sku-title-selected-text")[0].textContent;
                    dataValue = dataValue + document.getElementsByClassName('modal-sku-content')[i].getAttribute('data-pid') + ":" + document.getElementsByClassName('modal-sku-content-item modal-sku-content-item-active')[i].getAttribute('data-vid') + separate;
                }
            }


            if (lengthModalNoActive > 0) {
                if (property.length === 0) {
                    property = "1";
                }
            } else {
                property = "0";
            }
            var data = {
                "dataValue": dataValue,
                "image_origin": document.getElementsByClassName('mui-lazy slick-image')[0].src,
                "image_model": document.getElementsByClassName('modal-sku-image')[0].getElementsByTagName('img')[0].src,
                "price_origin": document.getElementsByClassName('modal-sku-title-price')[0].textContent,
                "price_promotion": document.getElementsByClassName('modal-sku-title-price')[0].textContent,
                "property": property,
                "quantity": document.getElementsByClassName('sku-number-edit')[0].getAttribute('value'),
                "title_origin": document.getElementsByClassName('title')[0].textContent,
                "shop_name": document.getElementsByClassName('shop-title')[0].textContent,
                "shop_title_wrapper": document.getElementsByClassName('shop-title-wrapper')[0].getAttribute('href'),
                "wangwang": document.getElementsByClassName('bar-item')[0].getElementsByTagName('span')[0].textContent,

            }
            var s = JSON.stringify(data);
            if (s.length === 0) {
            } else {
                Android.getDataSuccess(s);
                clearInterval(interval);
                count = 0;
            }


        }
    }, 200);
}


//function getDetailsInfomation1688(){
//    var count = 0;
//    var interval;
//    if(interval !== null){
//        clearInterval(interval);
//        interval = null;
//    }
//    interval = setInterval(function(){
//        if(count == 100){
//            clearInterval(interval);
////            Android.timeout();
//            count = 0;
//        }else{
//            count = count + 1;
//            var property = "";
//            var lengthModal = "";
//            var primary_image = "";
//            var lengthModalCheck = "";
//            var lengthModalActive = "";
//            var lengthModal = document.getElementsByClassName('operator-btn fui-btn').length;
////            var lengthModalCheck = document.getElementsByClassName('operator-btn fui-btn fui-btn-checked').length;
//            var lengthModalActive = document.getElementsByClassName('operator-btn fui-btn operator-btn-active').length;
//            var lengthQuantity = "";
//
//            var lengthQuantity = document.getElementsByClassName('d-spec-operator').length;
//            if(lengthModal > 0){
//                for(var i = 0 ; i < lengthModalActive ; i++){
//                     property =  document.getElementsByClassName('operator-btn fui-btn')[i].textContent;
//
//                     var contents =[];
//
//                     for(var j = 0; j < lengthQuantity; j++){
//                        var countdata = document.getElementsByClassName('unit-d-amount-control')[j].getAttribute('data-amount-num-show');
//
//                        if(!isNaN(countdata)){
//                            var content = {
//                                "size" : document.getElementsByClassName('operator-text')[j].textContent,
//                                "count" : document.getElementsByClassName('unit-d-amount-control')[j].getAttribute('data-amount-num-show'),
//                                "color" : document.getElementsByClassName('operator-btn fui-btn')[i].textContent,
//                            }
//                            contents.push(content);
//                        }
//
//                     }
//
//                }
//            }
//            var rangeCouns = window.wingxViewData[0].priceRanges.length;
//            var ranges = [];
//            if(rangeCouns > 0){
//                for(var i = 0 ; i < rangeCouns; i++){
//                    var range = {
//                        "begin" : window.wingxViewData[0].priceRanges[i].begin,
//                        "price" : window.wingxViewData[0].priceRanges[i].price,
//                    }
//                    ranges[i] = range;
//                }
//            }
//
//
//
//            if(lengthModal > 0){
//                if(property.length === 0){
//                    property = "1";
//                }
//            }else{
//                property = "0";
//            }
//            var data = {
//              "image_origin" : document.getElementsByClassName('swipe-image')[0].src,
//              "image_model" : document.getElementsByClassName('img-priview')[0].src,
//              "price_origin" : document.getElementsByClassName('num-init')[0].textContent,
//              "price_promotion" : document.getElementsByClassName('num-init')[0].textContent,
//              "properties" : contents,
//              "item_id" : window.wingxViewData[0].offerId,
//              "price_range" : ranges,
//              "count_sp" : document.getElementById('j-purchase-total-amount').textContent,
//              "title_origin" : document.getElementsByClassName('m-detail-title')[0].textContent,
//              "shop_name" : document.getElementsByClassName('company')[0].textContent,
//              "shop_id" : window.wingxViewData[0].pageid,
//              "wangwang" : document.getElementsByClassName('d-wangwang')[0].textContent,
//
//            }
//            var s = JSON.stringify(data);
//            if(s.length === 0){
//            }else{
//               Android.getDataSuccess(s);
//               clearInterval(interval);
//               count = 0;
//            }
//
//        }
//    },200);
//}

export function getDetailsInfomation1688() {

    var count = 0;
    var interval;
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }
    interval = setInterval(function () {
        if (count == 100) {
            clearInterval(interval);
            //            Android.timeout();
            count = 0;
        } else {

            count = count + 1;
            var property = "";
            var lengthModal = "";
            var primary_image = "";
            var lengthModalCheck = "";
            var lengthModalActive = "";
            var lengthModal = document.getElementsByClassName('takla-wap-b2b-skuselector-component').length;
            //            var lengthModalCheck = document.getElementsByClassName('sku-2nd-prop-item J_SkuSelector_2nd_PropItem').length;
            var lengthModalActive = document.getElementsByClassName('selected-count J_SelectedCount').length;
            var lengthQuantity = 0;
            var price_origin = "";
            var lengcolor = document.getElementsByTagName('sku-1st-prop-item J_SkuSelector_1st_PropItem').length + 1;
            var lengthQuantity = document.getElementsByTagName('amount-btn amount-down-btn  J_SkuItem_AmountDownBtn').length;
            if (lengthModal > 0) {
                for (var i = 0; i < lengthModalActive; i++) {
                    lengthQuantity = document.getElementsByClassName('amount-num J_SelectedTotalAmount')[0].textContent;
                    price_origin = document.getElementsByClassName('selector-price-item J_SkuPriceItem active-price')[0].getElementsByClassName("price-show-price")[0].getElementsByTagName("span")[0].textContent;
                    if (document.getElementsByClassName('takla-item-text J_SkuBtnText')[0].textContent != 'Chon mau sac kich co') {
                        property = document.getElementsByClassName('takla-item-text J_SkuBtnText')[0].textContent;
                    }

                    var contents = [];
                    for (var k = 0; k < lengcolor; k++) {
                        for (var j = 0; j < lengthQuantity; j++) {
                            var countdata = document.getElementsByClassName('amount-input J_SkuItem_AmountInput')[j].value;

                            if (countdata > 0) {
                                var content = {
                                    "size": document.getElementsByClassName('main-text')[j + 1].textContent,
                                    "count": document.getElementsByClassName('amount-input J_SkuItem_AmountInput')[j].value,
                                    "color": document.getElementsByClassName('sku-1st-prop-item J_SkuSelector_1st_PropItem active-sku-item')[0].getElementsByTagName("a")[0].textContent,
                                }
                                contents.push(content);
                            }
                        }
                    }

                }
            }

            //            var rangeCouns = window.wingxViewData[0].showpriceRanges.length;
            //            var ranges = [];
            //            if(rangeCouns > 0){
            //                for(var i = 0 ; i < rangeCouns; i++){
            //                    var range = {
            //                        "begin" : window.wingxViewData[0].showpriceRanges[i].range,
            //                        "price" : window.wingxViewData[0].showpriceRanges[i].price,
            //                    }
            //                    ranges[i] = range;
            //                }
            //            }
            // Android.getDataSuccess("");


            if (lengthModal > 0) {


                //                if(property.length === 0){
                //                    property = "1";
                //
                //                }
            } else {
                price_origin = "0";
                quantity = "0";
                property = "";

            }
            var data = {
                "dataValue": "",
                "image_origin": document.getElementsByClassName('shop-logo-container')[0].getElementsByTagName('img')[0].src,
                //            "image_model" : document.getElementsByClassName('image-container')[0].getElementsByTagName('img')[0].src,
                "image_model": document.getElementsByClassName('swipe-pane')[0].getElementsByTagName('img')[0].src,
                "price_origin": price_origin,
                "price_promotion": price_origin,
                "property": contents,
                "quantity": lengthQuantity,
                "title_origin": document.getElementsByTagName('title')[0].textContent,
                "shop_name": document.getElementsByClassName('takla-item-text shop-name-text')[0].getElementsByTagName("span")[0].textContent,
                "item_id": document.getElementsByTagName('input')[6].getAttribute('value'),
                "shop_id": document.getElementsByClassName('takla-wap-dpl-box module-wap-detail-common-comment')[0].getElementsByTagName('script')[0].textContent,
                "wangwang": document.getElementsByClassName("btn-text")[2].textContent,
            }


            var s = JSON.stringify(data);
            //            Android.getDataSuccess(s);
            if (s.length === 0) {


            } else {
                Android.getDataSuccess(s);
                clearInterval(interval);
                count = 0;
            }
        }
    }, 200);
}