/**
 * Created by Administrator on 2017/7/6.
 */
    window.onload= function () {
        var mySwiper = new Swiper('#banner1', {
            pagination: '.xgt-pagination',    //����СԲ��
            paginationClickable: true,        //����СԲ�㣨�ɵ����
            nextButton: '.swiper-button-next',//��һ�Ű�ť
            prevButton: '.swiper-button-prev',//��һ�Ű�ť
            //direction: 'vertical',//Slides�Ļ�������:��ֱ
            autoplay: 2000,//�Զ��л���ʱ��������λms�������趨�ò���slide�����Զ��л�
            //speed:300,//�����ٶȣ���slider�Զ�������ʼ��������ʱ�䣨��λms��
            loop: true,        //��ѭ��
            grabCursor: true,//����Ϊtrueʱ����긲��Swiperʱָ�����������״���϶�ʱָ�����ץ����״���������������״������ͬ��
            //mousewheelControl: true,//������
            lazyLoading: true,//ͼƬ������    http://www.swiper.com.cn/api/Images/2015/0308/213.html
            onLazyImageLoad: function (swiper, slide, image) {
                //alert('�ӳټ���ͼƬ');
                //console.log(swiper);//Swiperʵ��
                //console.log(slide);//�ĸ�slide�����ͼƬ�ڼ���
                //console.log(image);//�ĸ�ͼƬ�ڼ���
            }
        });
    }
