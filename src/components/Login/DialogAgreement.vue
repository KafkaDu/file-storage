<!--
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-08-17 10:06:28
 * @LastEditors: 海森杜 banshee1115@163.com
 * @LastEditTime: 2024-09-10 15:59:53
 * @FilePath: /share-drawing-v2.0/src/views/login/components/DialogAgreement.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-modal
    v-model:open="show"
    title="KafkaDu 用户服务条款"
    @ok="handleOk"
    :closable="false"
    width="1000px"
  >
    <div class="mt-8 text-center text-2xl leading-loose font-bold tracking-normal align-middle">
      KafkaDu用户服务协议
    </div>
    <div class="mb-8 text-gray-700 tracking-normal font-light align-middle">
      <div style="text-indent: 32px">
        本协议是KafkaDu软件(以下简称“本软件”)以及本软件相关服务(以下简称“本服务”)的使用人(包括但不限于个人、组织等，以下简称“用户”或“您”)与KafkaDu关于用户访问、下载、安装、使用、复制本软件及/或本服务等事宜所订立的协议。
      </div>
      <div style="text-indent: 32px">
        KafkaDu在此特别提醒，用户应在签署本协议前认真阅读、充分理解本协议的各个条款内容，特别是免除或者限制KafkaDu责任的条款、对用户权利进行限制的条款、约定争议解决方式、司法管辖和法律适用的条款等，以及开通或使用某项服务的单独协议。本协议中，限制、免责条款或者其他涉及用户重大权益的条款可能以加粗或加下划线形式提示您重点注意。
      </div>
      <br />
      <div class="font-normal" style="text-indent: 32px">请注意：</div>
      <div class="font-normal underline" style="text-indent: 32px">
        除非您接受本协议的所有条款，否则您无权访问、下载、安装、使用或复制本软件及与本软件相关的任何服务。您的访问、下载、安装、使用或复制本软件及/或本服务的行为都视为您对本协议的接受，本协议随即在您与KafkaDu之间产生法律效力，您的相关行为受本协议各个条款的约束。
      </div>
      <div class="font-normal underline" style="text-indent: 32px">
        未成年人应在法定监护人陪同下阅读、理解和判断是否同意本协议。未成年人行使和履行本协议项下的权利和义务视为已获得了法定监护人的同意或认可。
      </div>
      <br />
      <div>一、服务内容</div>
      <div style="text-indent: 32px">
        1.1
        KafkaDu旨在为广大用户提供数据存储、管理和分发等在线服务，其作为数据信息的存储平台本身不向用户提供内容，对用户的传输内容不做任何修改或编辑。
      </div>
      <div style="text-indent: 32px">
        1.2
        用户可以通过电脑、手机等终端以客户端等形式使用本软件及/或本服务，具体以KafkaDu实际提供的为准。用户理解并同意，KafkaDu仅提供相关数据存储、管理等网络服务，用户为使用该服务而经由第三方网络接入运营商提供的网络通信服务产生的网络通信费用(如宽带网络费、移动流量数据费等)均由用户自行向运营商了解，并自行承担相关费用。
      </div>
      <div style="text-indent: 32px">1.3 服务使用规则</div>
      <div style="text-indent: 64px">
        1.3.1
        用户应按照KafkaDu公布的关于数据信息存储、下载等各服务的使用期限、文件限制、大小限制、流量限制等相关规则使用相关服务。相关使用、存储等期限届满的，KafkaDu另行向用户提供一定的合理期限便于用户转移相关文件。如果合理期限届满或用户使用已不符合相关规则的，KafkaDu有权删除用户保存的超期、超容或不符合相关规则、法律、政策的文件、内容等。若由于用户在此之前没有主动转移相关文件而致使文件被删除造成的损失，与KafkaDu无关，全部责任由用户自行承担。同时，用户同意，KafkaDu可以无需另行通知用户而根据自己的安全单方改变前述相关规则和其他本软件及/或本服务的规则。
      </div>
      <div style="text-indent: 64px">
        1.3.2
        用户可通过购买方式享受KafkaDu提供的相关增值服务。KafkaDu可能会根据增值服务的整体规划，对增值服务的收费标准、方式等进行修改和变更，前述修改和变更，KafkaDu将以合理方式(如服务页面展示)进行通知。如果用户需要获取、使用相关增值服务，请审慎阅读并充分理解当时关于增值服务的收费标准、方式等信息。
      </div>
      <div style="text-indent: 64px">
        1.3.3 用户理解并同意，KafkaDu可能会根据需要更新或调整本软件及/或本服务的内容，包括但不限于：
      </div>
      <div style="text-indent: 96px">
        (1)KafkaDu在提供服务时，可能现在或日后对使用部分服务的用户开始收取一定的费用，且KafkaDu有权单方按需要制定、修改或者变更所提供的收费服务、收费标准、收费方式、服务费及服务条款。
        在此情况下，KafkaDu将以合理方式(如服务页面展示)进行通知。如果用户不同意支付该等费用，KafkaDu有权不向该用户提供相关服务或用户不能在收费开始后继续使用相关服务。用户理解并知晓，在为KafkaDu提供的增值服务进行付费过程中，可能出现第三方支付系统。
      </div>
      <div style="text-indent: 96px">
        (2)KafkaDu可以根据自身业务发展需要，对用户的服务空间免费容量进行调整。若存在超容使用服务的情形，用户应在KafkaDu给予的合理期限内，通过付费或自行转移存储内容的方式继续使用相关服务。如果用户在合理期限届满后未能处理超容存储空间，KafkaDu有权删除该账号下的超容内容，因此造成损失的与KafkaDu无关，用户应自行承担全部责任。
      </div>
      <div style="text-indent: 64px">
        1.3.4
        用户理解，KafkaDu作为数据信息存储空间服务平台，无法控制利用本软件及/或本服务制作、复制、发布、传送、传播用户储存之内容，也无法对用户的使用行为进行全面监视或控制，因此KafkaDu不保证用户所存储内容的合法性、正确性、完整性、真实性或品质;用户已预知使用本软件及/或本服务时，可能会接触到令人不快、不适当或令人厌恶之内容，并同意将自行加以判断并承担所有风险，而不依赖于KafkaDu;当用户在使用本软件及/或本服务过程中，发现其他用户存储违法内容时，用户有权利根据本协议所述的联系方式向KafkaDu进行举报。
      </div>
      <div style="text-indent: 64px">
        1.3.5
        若用户使用本软件及/或本服务不符合本协议，KafkaDu在经由相关部门(如行政主管部门、司法机关等)通知、举报等途径发现时有权做出独立判断，且有权在无需事先通知用户的情况下立即终止向用户提供部分或全部服务。用户若通过本软件及/或本服务散布和传播反动、色情或其他违反国家法律、法规的信息，KafkaDu的系统记录有可能作为用户违反法律法规的证据;因用户进行上述内容在KafkaDu的上载、传播而导致任何第三方提出索赔要求或衍生的任何损害或损失，与KafkaDu无关，用户应自行承担全部责任。
      </div>
      <br />
      <div>二、服务账号</div>
      <div style="text-indent: 32px">2.1 账号使用权</div>
      <div style="text-indent: 64px">
        2.1.1
        用户可以通过手机号码(中国境内)注册KafkaDu账号或经由KafkaDu授权的第三方账号登录(以实际提供的为准)注册KafkaDu账号，如果用户采用第三方账号授权登录方式注册KafkaDu账号的，除遵守本协议约定外，还应遵从该第三方服务提供方相关服务协议的约定。
      </div>
      <div style="text-indent: 64px">
        2.1.2
        用户应提供完整、真实、准确和最新的个人信息资料用于注册KafkaDu账号，不得以虚假、冒用的身份信息进行注册。用户不得使用违反国家法律法规或侵犯第三人合法权益的名称，如：
      </div>
      <div style="text-indent: 96px">
        (1)任何带有歧视性(包括但不限于民族歧视、地域歧视、性别歧视等)的;
      </div>
      <div style="text-indent: 96px">(2)夸大宣传并带有欺骗性的;</div>
      <div style="text-indent: 96px">
        (3)有害于社会主义道德风尚、公序良俗或者造成其他不良影响的;
      </div>
      <div style="text-indent: 96px">(4)歧义、误导或者侵犯其他用户、第三方合法权益的名称。</div>
      <div style="text-indent: 96px">
        如果因注册信息不真实或使用违反法律法规的名称而引起的责任由用户自行承担，KafkaDu不承担任何责任，并有权在未经事先通知用户的情况下暂停或终止为该类用户提供服务。
      </div>
      <div style="text-indent: 64px">
        2.1.3
        用户注册成功或经由KafkaDu授权的第三方账号使用本软件及/或本服务的，KafkaDu将给予用户一个唯一标识的KafkaDu账号，KafkaDu账号的所有权归KafkaDu，在无明显相反证据的情形下，KafkaDu账号的使用权归初始申请注册人(或其指定法定继承人，下同)享有。
      </div>
      <div style="text-indent: 64px">
        2.1.4
        用户应妥善保管其帐号及密码，并正确、安全地使用其帐号及密码。用户未尽上述义务导致帐号密码遗失、帐号被盗等情形而给用户或他人权益造成损害的，用户应当自行承担由此产生的法律责任。
        若用户账号和密码遭到他人非法使用或发生其他任何安全问题，用户应立即通知KafkaDu。KafkaDu在收到用户要求采取措施暂停其账号登录和使用的通知后，有权要求用户提供有效身份验证信息。KafkaDu核实用户所提供的个人有效身份验证信息与实名认证、注册的身份信息相一致的，应当及时采取措施恢复用户账号的登录和使用。用户没有提供其个人有效身份验证信息或者用户提供的个人有效身份验证信息与实名认证、注册的身份信息不一致的，KafkaDu有权拒绝用户的前述请求并保留对该账号采取暂停或终止服务的权利。对用户因被他人冒名申诉而致的任何损失，KafkaDu不承担任何责任，用户知晓KafkaDu账号及密码保管责任在于用户，KafkaDu仅提供申诉服务，且不承诺任何申诉结果。
      </div>
      <div style="text-indent: 32px">2.2 账号使用限制、暂停或终止</div>
      <div style="text-indent: 64px">
        2.2.1
        KafkaDu账号仅限初始申请注册人使用。KafkaDu禁止账号共享、赠与、借用、租用、转让或售卖，因上述原因导致账号或密码丢失，KafkaDu有权不予找回。如果KafkaDu发现使用者非账号初始申请注册人，KafkaDu有权在未经通知的情况下采取暂停服务、终止服务、冻结账号或回收账号的管理措施，由此造成的包括但不限于用户存储资料丢失及/或无法取回等其他一切损失由用户自行承担，KafkaDu无需向该账号的初始申请注册人承担任何责任，如果因此导致KafkaDu损失的，KafkaDu保留追究上述行为人相应法律责任的权利。
      </div>
      <div style="text-indent: 64px">
        2.2.2
        用户不得以盗号、窃取、利用KafkaDu或其他第三方系统漏洞等非法途径或通过未获KafkaDu授权的销售渠道获取或购买VIP会员服务及其他相关增值服务。
      </div>
      <div style="text-indent: 64px">
        2.2.3
        用户不得篡改本软件或攻击本软件，不得利用KafkaDu账号进行任何非正常使用(如盗链、盗播、盗下等)或以任何超出KafkaDu预定目的方式使用本软件及/或本服务，不得进行任何干扰本软件及/或本服务正常秩序或干扰其他用户正常使用本软件及/或本服务的行为，不得将KafkaDu及其他合作第三方(如有)向用户提供的服务用于任何违法违规、违反政策或违反公序良俗的目的。
      </div>
      <div style="text-indent: 32px">
        2.3
        KafkaDu特别提示，当用户每次上网或使用其他服务完毕后，应当恰当关闭有关账号，例如将所登录使用的KafkaDu账号安全退出。因黑客行为或用户的过错导致账号、密码或被他人使用，KafkaDu不承担任何责任。
      </div>
      <br />
      <div>三、软件的获取与更新</div>
      <div style="text-indent: 32px">
        3.1
        用户可以直接从KafkaDu的官方网站、官方应用分发平台以及KafkaDu授权的第三方网站、应用分发平台等KafkaDu官方或KafkaDu授权的渠道获取本软件。
      </div>
      <div style="text-indent: 32px">
        3.2
        如果用户从未经KafkaDu授权的第三方获取本软件或与本软件名称相同的安装程序，KafkaDu无法保证该软件能够正常使用，若由此造成相关损失的，与KafkaDu无关，用户应自行承担全部责任。
      </div>
      <div style="text-indent: 32px">
        3.3
        本软件新版本发布后，旧版本的软件可能无法使用。KafkaDu不保证旧版本软件继续可用，也不保证继续对旧版本软件提供相应的维护服务，用户应随时核对并下载最新版本。
      </div>
      <br />
      <div>四、用户使用须知</div>
      <div style="text-indent: 32px">4.1 特别提示</div>
      <div style="text-indent: 32px">
        KafkaDu始终致力于创造良好、健康的互联网环境。KafkaDu特别提示，用户使用互联网应当遵守国家有关的政策和法律法规，如刑法、国家安全法、计算机信息系统安全保护条例、商标法、著作权法等，保护国家利益，保护国家安全，保护他人合法权益，对于违法使用互联网络而引起的一切责任，由用户承担全部责任。
      </div>
      <div style="text-indent: 32px">4.2 用户禁止行为</div>
      <div style="text-indent: 64px">4.2.1 违法违规内容的传播行为</div>
      <div style="text-indent: 64px">
        用户利用本软件及/或本服务复制、发布、传送、传播、储存的包括但不限于资讯、资料、文字、软件、音乐、音讯、照片、图形、视讯、信息、用户的登记资料或其他资料(以下简称“内容”)，不得含有违反国家法律法规规定、妨害公序良俗、侵犯其他第三方合法权益或干扰本软件及/或本服务的正常运营的内容，包括但不限于：
      </div>
      <div style="text-indent: 96px">(1)国家法律法规禁止的内容：</div>
      <div style="text-indent: 128px">A.违反宪法确定的基本原则的;</div>
      <div style="text-indent: 128px">
        B.危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的;
      </div>
      <div style="text-indent: 128px">C.损害国家荣誉和利益的;</div>
      <div style="text-indent: 128px">D.煽动民族仇恨、民族歧视，破坏民族团结的;</div>
      <div style="text-indent: 128px">E.破坏国家宗教政策，宣扬邪教和封建迷信的;</div>
      <div style="text-indent: 128px">F.散布谣言，扰乱社会秩序，破坏社会稳定的;</div>
      <div style="text-indent: 128px">G.散布淫秽、色情、赌博、暴力、恐怖或者教唆犯罪的;</div>
      <div style="text-indent: 128px">H.侮辱或者诽谤他人，侵害他人合法权益的;</div>
      <div style="text-indent: 128px">I.煽动非法集会、结社、游行、示威、聚众扰乱社会秩序的;</div>
      <div style="text-indent: 128px">J.以非法民间组织名义活动的;</div>
      <div style="text-indent: 128px">
        K.不符合法律法规、社会主义制度、国家利益、公民合法利益、公共秩序、社会道德风尚和信息真实性等“七条底线”要求的;
      </div>
      <div style="text-indent: 128px">L.含有法律、行政法规禁止的其他内容的。</div>
      <div style="text-indent: 96px">
        (2)侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的内容;
      </div>
      <div style="text-indent: 96px">(3)涉及侵害他人隐私、个人信息或资料的内容;</div>
      <div style="text-indent: 96px">
        (4)骚扰信息、广告信息、过度营销信息、传销信息及垃圾信息或含有任何性或性暗示的内容;
      </div>
      <div style="text-indent: 96px">
        (5)其他违反法律法规、政策、公序良俗、社会公德或干扰本软件及/或本服务正常运营，侵犯其他用户或第三方合法权益的内容。
      </div>
      <div style="text-indent: 64px">
        如果用户发送或传播以上内容，用户同意KafkaDu有权进行独立判断并采取删除、屏蔽或断开链接等措施。若用户被他人投诉或用户投诉他人，KafkaDu有权将争议中相关方的主体、联系方式、投诉相关内容等必要信息提供给相关当事方或相关部门，以便及时解决投诉纠纷，保护各方合法权益。
      </div>
      <div style="text-indent: 64px">4.2.2 本软件及/或本服务的使用行为</div>
      <div style="text-indent: 64px">
        除非法律法规允许或KafkaDu书面许可，用户在使用本软件及/或本服务时不能从事以下行为，包括但不限于：
      </div>
      <div style="text-indent: 96px">(1)与本软件相关的使用行为</div>
      <div style="text-indent: 96px">
        用户不得从事包括但不限于以下任何行为，也不得为以下任何行为提供便利
      </div>
      <div style="text-indent: 128px">
        A.删除、隐匿、改变本软件及其副本上显示或其中包含的任何专利、版权、商标或其他所有权声明;
      </div>
      <div style="text-indent: 128px">
        B.对本软件进行反向工程、反向汇编、反向编译，或者以其他方式尝试发现本软件的源代码;
      </div>
      <div style="text-indent: 128px">C.复制或转让本软件的全部或部分;</div>
      <div style="text-indent: 128px">
        D.对本软件或者本软件运行过程中释放到任何设备终端内存中的数据及本软件运行过程中客户端与服务器端的交互数据进行复制、修改、增加、删除、挂接运行或创作任何衍生作品，形式包括但不限于使用插件、外挂或非KafkaDu授权的第三方工具或服务接入本软件和相关系统;
      </div>
      <div style="text-indent: 128px">
        E.通过修改或伪造软件运行中的指令、数据，增加、删减、变动软件的功能或运行效果，或者将用于上述用途的软件、方法进行运营或向公众传播，无论这些行为是否为商业目的;
      </div>
      <div style="text-indent: 128px">
        F.通过非KafkaDu开发、授权的第三方软件、插件、外挂、系统，登录或使用本软件，或制作、发布、传播上述工具;
      </div>
      <div style="text-indent: 128px">
        G.未经KafkaDu书面授权，对于本软件的相关信息实施包括但不限于下列行为：使用、出租、出借、复制、修改、链接、转载、汇编、发表、出版，建立镜像站点、借助本软件发展与之有关的衍生产品、作品、服务、插件、外挂、兼容、互联等;
      </div>
      <div style="text-indent: 128px">
        H.自行、授权他人或利用第三方软件对本软件及其组件、模块、数据等进行干扰;
      </div>
      <div style="text-indent: 128px">I.其他以任何方式干扰、阻碍或损害本软件使用或运行的行为。</div>
      <div style="text-indent: 96px">(2)与本服务相关的使用行为</div>
      <div style="text-indent: 96px">
        用户不得从事包括但不限于以下任何行为，也不得为以下任何行为提供便利
      </div>
      <div style="text-indent: 128px">
        A.利用本服务发布、传送、传播、储存本协议第4.2.1条的违法违规内容;
      </div>
      <div style="text-indent: 128px">
        B.在并不拥有相应的权利并未得到权利人所有必要的认可的情况下，传送或散布以其他方式实现传送含有受到知识产权法律保护的图像、相片、软件或其他资料的文件，包括但不限于受版权、商标法、隐私权、公开权保护的文件;
      </div>
      <div style="text-indent: 128px">
        C.通过侵犯商标、版权、专利、商业机密或任何一方的其他专有权利的方式利用本服务获得相关资料或信息或使用前述资料或信息;
      </div>
      <div style="text-indent: 128px">
        D.其他以任何方式干扰、阻碍或损害本服务提供或使用及损害第三方合法权益的行为。
      </div>
      <div style="text-indent: 64px">4.2.3 危害计算机信息网络安全的行为</div>
      <div style="text-indent: 64px">
        用户不得从事包括但不限于以下任何行为，也不得为以下任何行为提供便利：
      </div>
      <div style="text-indent: 96px">
        (1)未经允许，进入计算机信息网络或者使用计算机信息网络资源的;
      </div>
      <div style="text-indent: 96px">
        (2)未经允许，对计算机信息网络功能进行删除、修改或者增加的;
      </div>
      <div style="text-indent: 96px">
        (3)未经允许，对进入计算机信息网络中存储、处理或者传输的数据和应用程序进行删除、修改或者增加的;
      </div>
      <div style="text-indent: 96px">(4)故意制作、传播计算机病毒、木马等破坏性程序的;</div>
      <div style="text-indent: 96px">
        (5)其他危害KafkaDu、本软件及/或服务、其他主体安全或网络安全的行为。
      </div>
      <div style="text-indent: 32px">4.3 法律责任</div>
      <div style="text-indent: 32px">
        用户理解并同意，若用户违反法律法规、本协议及/或KafkaDu其他规则、政策的，KafkaDu有权作出独立判断并在无需事先通知用户的情况下随时单方根据相应情形采取以下一项或多项措施(具体措施以及采取措施的时间长短由KafkaDu根据用户的违法、违约情节相应情况确定)：
      </div>
      <div style="text-indent: 64px">(1)对用户进行警告;</div>
      <div style="text-indent: 64px">(2)限制用户使用本软件及/或本服务部分或全部功能;</div>
      <div style="text-indent: 64px">(3)删除、屏蔽相关内容或断开链接;</div>
      <div style="text-indent: 64px">
        (4)中止、终止用户对相应服务帐号的使用(简称“封号”)或回收账号;
      </div>
      <div style="text-indent: 64px">
        (5)向国家有关机关报告，并将与用户有关的身份信息、联系方式等必要信息提供给相关部门;
      </div>
      <div style="text-indent: 64px">(6)采取其他合理、合法的措施;</div>
      <div style="text-indent: 64px">(7)依法追究用户的法律责任。</div>
      <div style="text-indent: 32px">
        如果KafkaDu对用户采取上述措施导致用户暂时或永久无法使用本软件及/或本服务，用户应自行承担相应后果(包括但不限于通信中断，用户资料及相关数据、增值服务、产品或服务等的清空或无法使用等)。由此造成的相关损失，与KafkaDu无关，用户应自行承担。
      </div>
      <br />
      <div>五、第三方提供的产品或服务</div>
      <div style="text-indent: 32px">
        5.1
        用户在本软件及/或本服务中使用第三方提供的产品或服务时，除遵守本协议约定外，还应遵守第三方的用户协议。KafkaDu和第三方对可能出现的纠纷在法律规定和约定的范围内各自承担责任。
      </div>
      <div style="text-indent: 32px">
        5.2
        用户知悉，因用户使用本软件或要求KafkaDu提供特定服务时，本软件可能会调用第三方系统或者通过第三方支持用户的使用或访问，使用或访问的结果由该第三方提供(包括但不限于用户通过本软件及/或本服务跳转到的第三方提供的服务及内容，第三方通过KafkaDu接入的服务及内容等)。
      </div>
      <br />
      <div>六、广告</div>
      <div style="text-indent: 32px">
        6.1
        用户同意，KafkaDu可以自行或由第三方通过短信、电子邮件或电子信息等多种方式向用户发送、展示广告或其他信息(包括商业与非商业信息)，广告或其他信息的具体发送及展示形式、频次及内容等以KafkaDu实际提供为准。
      </div>
      <div style="text-indent: 32px">
        6.2
        KafkaDu将依照相关法律法规要求开展广告业务。用户知悉并同意，对本软件及/或本服务中出现的广告，用户应审慎判断其真实性和可靠性，除法律明确规定外，用户应对因该广告而实施的行为负责。
      </div>
      <br />
      <div>七、隐私保护</div>
      <div style="text-indent: 32px">
        7.1
        保护用户隐私和个人信息是KafkaDu的一项基本政策，KafkaDu按照《KafkaDu隐私政策》的约定收集、使用、储存和分享用户的个人信息，进行用户的隐私保护。
      </div>
      <div style="text-indent: 32px">
        7.2 KafkaDu不会公开或向第三方用户提供用户存储在本软件上的非公开内容，除非存在下列情形：
      </div>
      <div style="text-indent: 64px">(1)事先获得用户的授权;</div>
      <div style="text-indent: 64px">(2)为提供用户要求的服务所必需;</div>
      <div style="text-indent: 64px">(3)相关法律法规或司法机关、行政主管部门要求;</div>
      <div style="text-indent: 64px">(4)在紧急情况下，为维护公共利益目的需要;</div>
      <div style="text-indent: 64px">
        (5)为维护KafkaDu的合法权益，例如查找、预防、处理欺诈或安全方面的问题;
      </div>
      <div style="text-indent: 64px">(6)其他依法需要公开、披露个人信息的情况。</div>
      <br />
      <div>八、知识产权声明</div>
      <div style="text-indent: 32px">
        8.1
        本软件及/或本服务由KafkaDu开发或提供，其享有以下各项内容完全的、不可分割的所有权及知识产权：
      </div>
      <div style="text-indent: 64px">
        (1)除用户自行上载、传播的内容，以及第三方授权软件或技术外，本软件相关的所有信息内容(包括但不限于文字、图片、音频、视频、图表、界面设计、版面框架、代码、脚本、小应用程序、有关数据或电子文档等)均受法律法规保护，KafkaDu依法享有上述相关知识产权。
      </div>
      <div style="text-indent: 64px">(2)用户信息;</div>
      <div style="text-indent: 64px">
        (3)用户向KafkaDu提供的与本软件及/或本服务相关的任何信息及反馈。
      </div>
      <div style="text-indent: 32px">
        8.2
        未经KafkaDu或相关权利人书面同意，用户不得为任何商业或非商业目的自行或许可任何第三方实施、利用、转让上述知识产权。
      </div>
      <div style="text-indent: 32px">
        8.3 未经KafkaDu书面授权，用户不得对本软件及/或本服务进行反向工程(Reverse
        engineer)、反向编译(Decompile)或反汇编(Disassemble)，KafkaDu保留追究上述未经许可行为责任的权利。
      </div>
      <div style="text-indent: 32px">
        8.4
        用户同意，其在本软件及/或本服务上载、传播的信息不得侵犯任何第三人的知识产权，未经相关权利人之事先书面授权，用户不得以任何方式制作、复制、发布、传送、传播或储存任何受著作权法、商标法、专利法等相关知识产权法律法规所保护的内容或属于其他人的专有信息。如果用户上传的内容允许其他用户下载、查看、收听或以其他方式访问或分发，其必须保证该内容的发布和相关行为的实施符合知识产权相关法律法规的规定，包括但不限于：
      </div>
      <div style="text-indent: 64px">
        (1)用户在收到侵权通知之时，应立即删除或禁止访问声明的侵权内容，并同时联系发送通知的人员以了解详细信息;
      </div>
      <div style="text-indent: 64px">
        (2)用户知悉并同意KafkaDu将根据相关法律法规对第三方发出的合格的侵权通知对用户发布的内容进行处理，并按照要求删除或禁止访问声明的侵权内容，采用并实施适当的措施，以期杜绝在相应条件下重复侵权。
      </div>
      <br />
      <div>九、青少年用户必须遵守全国青少年网络文明公约</div>
      <div style="text-indent: 32px">要善于网上学习，不浏览不良信息;</div>
      <div style="text-indent: 32px">要诚实友好交流，不侮辱欺诈他人;</div>
      <div style="text-indent: 32px">要增强自护意识，不随意约会网友;</div>
      <div style="text-indent: 32px">要维护网络安全，不破坏网络秩序;</div>
      <div style="text-indent: 32px">要有益身心健康，不沉溺虚拟时空。</div>
      <br />
      <div>十、不可抗力及免责声明</div>
      <div style="text-indent: 32px">
        10.1
        用户理解并同意，在使用本软件及/或本服务过程中，可能遇到不可抗力等风险因素，本协议项下所称的不可抗力是指KafkaDu不能合理控制、不可预见或即使预见亦无法避免的事件，该事件妨碍、影响或延误KafkaDu为用户提供服务。该事件包括但不限于政府行为、地震、台风、洪水、火灾、疫情及其它天灾、战争或任何其它类似事件。由于不可抗力导致KafkaDu未向用户提供或未能按本协议的约定向用户提供服务，KafkaDu不承担任何责任。
      </div>
      <div style="text-indent: 32px">
        10.2
        尽管KafkaDu致力于为用户提供不受干扰的服务，但在法律法规允许的范围内，KafkaDu对以下情形导致的服务中断或受阻不承担责任：
      </div>
      <div style="text-indent: 64px">(1)受到计算机病毒、木马或其他恶意程序、黑客攻击的破坏。</div>
      <div style="text-indent: 64px">
        (2)用户或KafkaDu的电脑软件、系统、硬件和通信线路出现故障。
      </div>
      <div style="text-indent: 64px">
        (3)用户操作不当或用户通过非KafkaDu授权的方式使用本软件及/或本服务。
      </div>
      <div style="text-indent: 64px">(4)程序版本过时、设备的老化和/或其兼容性问题。</div>
      <div style="text-indent: 64px">(5)其他KafkaDu无法控制或合理预见的情形。</div>
      <div style="text-indent: 32px">10.3 KafkaDu不保证(包括但不限于)：</div>
      <div style="text-indent: 64px">
        (1)通过本软件及/或本服务而获取的任何信息准确、完整、适用或合法;
      </div>
      <div style="text-indent: 64px">(2)本软件及/或本服务一定能满足用户的使用要求;</div>
      <div style="text-indent: 64px">
        (3)通过本软件及/或本服务传送或接受或未能传送或接受任何性质的材料。用户理解并同意，用户通过本软件及/或本服务传送或接受的任何资料或信息，其风险由用户自行承担;因该等使用导致用户电脑系统损坏或资料流失，与KafkaDu无关，用户应自行承担相关责任;
      </div>
      <div style="text-indent: 64px">
        (4)为提高用户体验，本软件及/或本服务可能提供进入第三方网站的链接，该链接可能设置于本软件内部或通过外部超级链接提供。用户知悉并了解，第三方网站链接系仅为向用户提供信息和便利之目的而设置，不可视为KafkaDu与该第三方网站有任何形式的合作，KafkaDu无法控制第三方网站的内容，亦不保证第三方网站或信息的准确性等。用户如需使用第三方网站，需自行判断，并承担因使用其他网站、内容而引起的所有风险，因该使用行为引起的纠纷由用户自行解决，与KafkaDu无关。KafkaDu亦不对其他网站或其他网站提供的内容、产品或服务承担任何间接的、特殊的、附带的、扩张的、后果性的或惩罚性的损害承担责任。
      </div>
      <div style="text-indent: 32px">
        10.4
        用户理解并同意，KafkaDu需要定期或不定期的对提供本软件及/或本服务的平台或相关设备进行检修、维护、升级或者安装新设施或引入新服务，如果因此类情况造成用户使用本软件及/或本服务受到限制，无论该限制系收费或者免费提供的服务，KafkaDu无需为此承担任何责任，但KafkaDu将尽可能事先进行通告并尽快恢复用户的使用。
      </div>
      <div style="text-indent: 32px">
        10.5
        一旦得知出现任何错误或疏漏，KafkaDu将尽最大努力尽快予以纠正。但是，KafkaDu不能保证服务或本网站不会出错，KafkaDu将不为该等错误或疏漏承担责任。
      </div>
      <br />
      <div>十一、违约责任</div>
      <div style="text-indent: 32px">
        用户同意保证和维护KafkaDu及其合作公司、关联公司、其他用户及其他任何第三方的合法权益，如果因用户违反法律法规和本协议项下任何条款而给KafkaDu或其他任何第三方造成损失，用户同意承担由此产生的损害赔偿责任，赔偿范围包括但不限于罚款、赔偿金、KafkaDu支付的相应的诉讼费、律师费、公证费等及KafkaDu因此遭受的其他经济损失。
      </div>
      <br />
      <div>十二、通知与送达</div>
      <div style="text-indent: 32px">
        12.1
        本协议项下所有KafkaDu对用户的通知方式均可通过网页公告、电子邮件、常规信件送达、电话等方式进行;该等通知于发送之时视为已送达收件人。如果多种通知方式并存的，则送达时间以上述方式中最早发送之时为准。
      </div>
      <div style="text-indent: 32px">
        12.2
        用户知悉并同意，为便于用户收取相关通知，用户应确保预留的联系方式为正确及有效，并在变更后及时登录本软件修改，如果因用户未提供正确的联系信息或未及时告知新的联系方式，导致无法及时收取通知，将由用户自行承担由此产生的损失及法律后果。
      </div>
      <br />
      <div>十三、其他</div>
      <div style="text-indent: 32px">
        13.1
        本协议构成双方对本协议之约定事项及其他有关事宜的完整协议，除本协议规定的之外，未赋予本协议各方其他权利。
      </div>
      <div style="text-indent: 32px">
        13.2
        本协议一经公布即生效，KafkaDu有权随时对协议内容进行修改，用户可在相关服务页面查阅最新版本的协议条款。如果用户不同意本协议相关修改条款，用户有权停止使用本软件及/或本服务。如果用户继续使用本软件及/或本服务，则视为用户已接受变更后的协议。
      </div>
      <div style="text-indent: 32px">
        13.3 本协议的成立、生效、履行、解释及纠纷解决，适用中华人民共和国大陆地区法律。
      </div>
      <div style="text-indent: 32px">
        13.4 未经KafkaDu书面同意，用户不得转让本协议项下的任何权利、利益和义务。
      </div>
      <div style="text-indent: 32px">
        13.5 本协议所有条款的标题仅为阅读方便，本身并无实际涵义，不能作为本协议涵义解释的依据。
      </div>
      <div style="text-indent: 32px">
        13.6
        本协议条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并且对双方具有约束力。
      </div>
      <div style="text-indent: 32px">
        13.7
        若用户和KafkaDu之间发生任何纠纷或争议，首先应友好协商解决;若协商未成，任何一方均应向KafkaDu所在地人民法院提起诉讼。
      </div>
      <div style="text-indent: 32px">13.8 KafkaDu对本协议有法律范围内的解释权。</div>
      <div style="text-indent: 32px">
        13.9 若本协议有中文、英文等多个语言版本，相应内容不一致的，均以中文版的内容为准。
      </div>
    </div>
    <template #footer>
      <a-button class="w-full bg-blue-500" key="acceptAgreement" type="primary" @click="handleOk"
        >我已经阅读并接受</a-button
      >
    </template>
  </a-modal>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  visible: boolean
}
const props = withDefaults(defineProps<Props>(), {
  visible: false
})

const show = computed(() => props.visible)

const emit = defineEmits<{
  (e: 'close'): void
}>()

const handleOk = () => {
  emit('close')
}
</script>

<style scoped></style>
