import re
import requests
with open('E:\\桌面\\liangshan\\lskj.html',errors='ignore',encoding='utf8') as f:
    alist = []
    for i in f:
        # print(i)
        a=re.search('src="(?P<conn2>.*?)"|href="(?P<conn>.*?)"',i)
        if a != None:
            if a.group('conn') !=None:
                b=a.group('conn')
            elif a.group('conn2'):
                b=a.group('conn2')
            if b.endswith('html'):
                continue
            if b.endswith('cn'):
                continue
            elif b.endswith('#'):
                continue
            elif b.endswith('ico'):
                continue
            elif b.endswith('mp4'):
                continue
            elif b =='':
                continue
            elif b.endswith('079'):
                continue
            print(b)
            alist.append(b)
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'}
    # for y,i in enumerate(alist):
    #     print(i)
    #     hou=i.split('/')[-1]
    #     print(hou)
    #     # print(i.split('/'))
    #     # if y<1:
    #     res = requests.get(i,headers=headers)
    #     if hou.endswith('js') or hou.endswith('css'):
    #         content = res.content.decode()
    #         with open(hou, 'w', errors='ignore') as f:
    #             f.write(content)
    #     else:
    #         content = res.content
    #         with open(hou, 'wb') as f:
    #             f.write(content)



ss="""
http://www.lskjds.com/templates/dist/css/vendor.css
http://www.lskjds.com/templates/dist/css/base.css
http://www.lskjds.com/templates/dist/js/polyfill.js
http://www.lskjds.com/templates/dist/js/scrollreveal.js
http://www.lskjds.com/scripts/jquery/chebrow.js
http://www.lskjds.com/templates/dist/images/icon-banner01.png
http://www.lskjds.com/templates/dist/images/icon-banner02.png
http://www.lskjds.com/templates/dist/images/icon-banner03.png
http://www.lskjds.com/templates/dist/images/icon-banner04.png
http://www.lskjds.com/templates/dist/images/feature01.png
http://www.lskjds.com/templates/dist/images/feature02.png
http://www.lskjds.com/templates/dist/images/feature03.png
http://www.lskjds.com/templates/dist/images/feature04.png
http://www.lskjds.com/templates/dist/images/icon_service01.png
http://www.lskjds.com/templates/dist/images/icon_service02.png
http://www.lskjds.com/templates/dist/images/icon_service03.png
http://www.lskjds.com/templates/dist/images/icon_service04.png
http://www.lskjds.com/templates/dist/images/icon_profile_01.png
http://www.lskjds.com/templates/dist/images/icon_profile_02.png
http://www.lskjds.com/templates/dist/images/icon_profile_03.png
http://www.lskjds.com/templates/dist/images/ft_logo.png
http://www.lskjds.com/templates/dist/images/icon_consult.png
http://www.lskjds.com/templates/dist/images/icon_wechat.png
http://www.lskjds.com/templates/dist/images/ft_ewm.jpg
http://www.lskjds.com/templates/dist/images/icon_phone.png
http://www.lskjds.com/templates/dist/images/icon_arrow.png
http://www.lskjds.com/templates/dist/js/jquery.js
http://www.lskjds.com/templates/dist/js/common.js
http://www.lskjds.com/templates/dist/js/idangerous.swiper.js
http://www.lskjds.com/templates/dist/js/countup.js
http://www.lskjds.com/templates/dist/js/index.js
"""