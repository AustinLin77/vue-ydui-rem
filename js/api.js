
function api(vm,gop,message,url,pram,fn) {
    vm.$dialog.loading.open(message);
    $.ajax({
        type:gop,
        url:vm.path+url,
        dataType:"json",
        data:pram,
        success:fn,
        error:function () {
            vm.$dialog.toast({
                mes: '系统维护中',
                timeout: 1500
            });
            vm.$dialog.loading.close();
        },
        complete:function () {
            vm.$dialog.loading.close();
        }
    });
}


function api2(vm,gop,message,url,pram,fn) {
    vm.$dialog.loading.open(message);
    $.ajax({
        type:gop,
        url:url,
        dataType:"json",
        data:pram,
        success:fn,
        error:function (res) {
            vm.$dialog.toast({
                mes: res,
                timeout: 1500
            });
            vm.$dialog.loading.close();
        },
        complete:function () {
            vm.$dialog.loading.close();
        }
    });
}