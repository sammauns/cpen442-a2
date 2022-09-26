console.log("Welcome to Shift Cypher Decription!");
let cypher = 'TUPPRHYXBHRDPGAURYHUCKUPJAYLLDDJRUCKXAHDJDPPDKRHGKAYLLDGKHDPPRHGESEYRHGEBYJRXLVPGEBQYTEKRDGCKHYTVCDZURHUOPPDPPRHGESLUDRHYLUTHOAYLLDGTYXPQERKDODEORHGEBDVYXRGRAYLLDUZUEGJGJUPPYJJRHURYMYJRHUHYXKUTHGAHTDKZUCOPGSUPORCXUQYRQYTEAYLLDQYTEAYLLDQYTEQYRTYXPQRHUJDPPEUZUCAYLURYDEUEQGTYEQUCHYTLDEOLGPUKGZUJDPPUEVORHGKRGLUKHUKDGQDPYXQQYRGLXKRVUBURRGEBKYLUTHUCUEUDCRHUAUERCUYJRHUUDCRHQYRPURLUKUURHDRTYXPQVUJYXCRHYXKDEQLGPUKQYTEAYLLDGRHGESJYCAYLLDOYXKUUAYLLDDPGAUHDQPUDCERKUZUCDPRHGEBKYJRHGKKYCRGEHUCPUKKYEKGERHUKAHYYPCYYLAYLLDDEQRHYXBHRHGKTDKEYRDZUCOBYYQYMMYCRXEGROJYCKHYTGEBYJJHUCSEYTPUQBUAYLLDDKRHUCUTDKEYYEURYPGKRUERYHUCAYLLDKRGPPGRTDKBYYQMCDARGAURYKDOGRYZUCOUKAYLLDRHDRKDVYXRRHUCGBHRQGKRDEAUVXRRHUEGTYEQUCTHDRPDRGRXQUYCPYEBGRXQUGZUBYRRYDPGAUHDQEYGQUDTHDRPDRGRXQUTDKAYLLDYCPYEBGRXQUUGRHUCAYLLDVXRRHYXBHRRHUOTUCUEGAUBCDEQTYCQKRYKDO'
cypher = cypher.split('')
let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
​
function func_shift(letter, shift){
    return alphabet[(alphabet.indexOf(letter)+shift) % 26];
}
function func_decrypt(){
    for (let s = 1; s <=25; s++){
        let plainText = [];
        for(let i =0; i< cypher.length; i++){
            plainText.push(func_shift(cypher[i], s));
        }
        console.log("plainText %d = ", s);
        //referred to link: https://www.designcise.com/web/tutorial/how-to-fix-replaceall-is-not-a-function-javascript-error
        console.log(plainText.toString().replace(/,/g, ''));
    }
}
console.log("Test func_shift: shift A by 3 = %s", func_shift('A', 3) )
func_decrypt()
console.log("Simple shifting didn't give the plainText !!!!")
​
//Output is as follows
​
/*
Welcome to Shift Cypher Decription!
Test func_shift: shift A by 3 = D
plainText 1 = 
UVQQSIZYCISEQHBVSZIVDLVQKBZMMEEKSVDLYBIEKEQQELSIHLBZMMEHLIEQQSIHFTFZSIHFCZKSYMWQHFCRZUFLSEHDLIZUWDEAVSIVPQQEQQSIHFTMVESIZMVUIPBZMMEHUZYQRFSLEPEFPSIHFCEWZYSHSBZMMEVAVFHKHKVQQZKKSIVSZNZKSIVIZYLVUIHBIUELAVDPQHTVQPSDYVRZSRZUFBZMMERZUFBZMMERZUFRZSUZYQRSIVKEQQFVAVDBZMVSZEFVFRHUZFRVDIZUMEFPMHQVLHAVKEQQVFWPSIHLSHMVLIVLEHREQZYRRZSHMYLSWVCVSSHFCLZMVUIVDVFVEDSIVBVFSDVZKSIVVEDSIRZSQVSMVLVVSIESUZYQRWVKZYDSIZYLEFRMHQVLRZUFBZMMEHSIHFTKZDBZMMEPZYLVVBZMMEEQHBVIERQVEDFSLVAVDEQSIHFCLZKSIHLLZDSHFIVDQVLLZFLHFSIVLBIZZQDZZMBZMMEEFRSIZYCISIHLUELFZSEAVDPCZZRZNNZDSYFHSPKZDLIZUHFCZKKIVDTFZUQVRCVBZMMEELSIVDVUELFZZFVSZQHLSVFSZIVDBZMMELSHQQHSUELCZZRNDEBSHBVSZLEPHSZAVDPVLBZMMESIESLEWZYSSIVDHCISRHLSEFBVWYSSIVFHUZFRVDUIESQESHSYRVZDQZFCHSYRVHAVCZSSZEQHBVIERFZHRVEUIESQESHSYRVUELBZMMEZDQZFCHSYRVVHSIVDBZMMEWYSSIZYCISSIVPUVDVFHBVCDEFRUZDRLSZLEP
plainText 2 = 
VWRRTJAZDJTFRICWTAJWEMWRLCANNFFLTWEMZCJFLFRRFMTJIMCANNFIMJFRRTJIGUGATJIGDALTZNXRIGDSAVGMTFIEMJAVXEFBWTJWQRRFRRTJIGUNWFTJANWVJQCANNFIVAZRSGTMFQFGQTJIGDFXAZTITCANNFWBWGILILWRRALLTJWTAOALTJWJAZMWVJICJVFMBWEQRIUWRQTEZWSATSAVGCANNFSAVGCANNFSAVGSATVAZRSTJWLFRRGWBWECANWTAFGWGSIVAGSWEJAVNFGQNIRWMIBWLFRRWGXQTJIMTINWMJWMFISFRAZSSATINZMTXWDWTTIGDMANWVJWEWGWFETJWCWGTEWALTJWWFETJSATRWTNWMWWTJFTVAZRSXWLAZETJAZMFGSNIRWMSAVGCANNFITJIGULAECANNFQAZMWWCANNFFRICWJFSRWFEGTMWBWEFRTJIGDMALTJIMMAETIGJWERWMMAGMIGTJWMCJAAREAANCANNFFGSTJAZDJTJIMVFMGATFBWEQDAASAOOAETZGITQLAEMJAVIGDALLJWEUGAVRWSDWCANNFFMTJWEWVFMGAAGWTARIMTWGTAJWECANNFMTIRRITVFMDAASOEFCTICWTAMFQITABWEQWMCANNFTJFTMFXAZTTJWEIDJTSIMTFGCWXZTTJWGIVAGSWEVJFTRFTITZSWAERAGDITZSWIBWDATTAFRICWJFSGAISWFVJFTRFTITZSWVFMCANNFAERAGDITZSWWITJWECANNFXZTTJAZDJTTJWQVWEWGICWDEFGSVAESMTAMFQ
plainText 3 = 
WXSSUKBAEKUGSJDXUBKXFNXSMDBOOGGMUXFNADKGMGSSGNUKJNDBOOGJNKGSSUKJHVHBUKJHEBMUAOYSJHETBWHNUGJFNKBWYFGCXUKXRSSGSSUKJHVOXGUKBOXWKRDBOOGJWBASTHUNGRGHRUKJHEGYBAUJUDBOOGXCXHJMJMXSSBMMUKXUBPBMUKXKBANXWKJDKWGNCXFRSJVXSRUFAXTBUTBWHDBOOGTBWHDBOOGTBWHTBUWBASTUKXMGSSHXCXFDBOXUBGHXHTJWBHTXFKBWOGHROJSXNJCXMGSSXHYRUKJNUJOXNKXNGJTGSBATTBUJOANUYXEXUUJHENBOXWKXFXHXGFUKXDXHUFXBMUKXXGFUKTBUSXUOXNXXUKGUWBASTYXMBAFUKBANGHTOJSXNTBWHDBOOGJUKJHVMBFDBOOGRBANXXDBOOGGSJDXKGTSXGFHUNXCXFGSUKJHENBMUKJNNBFUJHKXFSXNNBHNJHUKXNDKBBSFBBODBOOGGHTUKBAEKUKJNWGNHBUGCXFREBBTBPPBFUAHJURMBFNKBWJHEBMMKXFVHBWSXTEXDBOOGGNUKXFXWGNHBBHXUBSJNUXHUBKXFDBOOGNUJSSJUWGNEBBTPFGDUJDXUBNGRJUBCXFRXNDBOOGUKGUNGYBAUUKXFJEKUTJNUGHDXYAUUKXHJWBHTXFWKGUSGUJUATXBFSBHEJUATXJCXEBUUBGSJDXKGTHBJTXGWKGUSGUJUATXWGNDBOOGBFSBHEJUATXXJUKXFDBOOGYAUUKBAEKUUKXRWXFXHJDXEFGHTWBFTNUBNGR
plainText 4 = 
XYTTVLCBFLVHTKEYVCLYGOYTNECPPHHNVYGOBELHNHTTHOVLKOECPPHKOLHTTVLKIWICVLKIFCNVBPZTKIFUCXIOVHKGOLCXZGHDYVLYSTTHTTVLKIWPYHVLCPYXLSECPPHKXCBTUIVOHSHISVLKIFHZCBVKVECPPHYDYIKNKNYTTCNNVLYVCQCNVLYLCBOYXLKELXHODYGSTKWYTSVGBYUCVUCXIECPPHUCXIECPPHUCXIUCVXCBTUVLYNHTTIYDYGECPYVCHIYIUKXCIUYGLCXPHISPKTYOKDYNHTTYIZSVLKOVKPYOLYOHKUHTCBUUCVKPBOVZYFYVVKIFOCPYXLYGYIYHGVLYEYIVGYCNVLYYHGVLUCVTYVPYOYYVLHVXCBTUZYNCBGVLCBOHIUPKTYOUCXIECPPHKVLKIWNCGECPPHSCBOYYECPPHHTKEYLHUTYHGIVOYDYGHTVLKIFOCNVLKOOCGVKILYGTYOOCIOKIVLYOELCCTGCCPECPPHHIUVLCBFLVLKOXHOICVHDYGSFCCUCQQCGVBIKVSNCGOLCXKIFCNNLYGWICXTYUFYECPPHHOVLYGYXHOICCIYVCTKOVYIVCLYGECPPHOVKTTKVXHOFCCUQGHEVKEYVCOHSKVCDYGSYOECPPHVLHVOHZCBVVLYGKFLVUKOVHIEYZBVVLYIKXCIUYGXLHVTHVKVBUYCGTCIFKVBUYKDYFCVVCHTKEYLHUICKUYHXLHVTHVKVBUYXHOECPPHCGTCIFKVBUYYKVLYGECPPHZBVVLCBFLVVLYSXYGYIKEYFGHIUXCGUOVCOHS
plainText 5 = 
YZUUWMDCGMWIULFZWDMZHPZUOFDQQIIOWZHPCFMIOIUUIPWMLPFDQQILPMIUUWMLJXJDWMLJGDOWCQAULJGVDYJPWILHPMDYAHIEZWMZTUUIUUWMLJXQZIWMDQZYMTFDQQILYDCUVJWPITIJTWMLJGIADCWLWFDQQIZEZJLOLOZUUDOOWMZWDRDOWMZMDCPZYMLFMYIPEZHTULXZUTWHCZVDWVDYJFDQQIVDYJFDQQIVDYJVDWYDCUVWMZOIUUJZEZHFDQZWDIJZJVLYDJVZHMDYQIJTQLUZPLEZOIUUZJATWMLPWLQZPMZPILVIUDCVVDWLQCPWAZGZWWLJGPDQZYMZHZJZIHWMZFZJWHZDOWMZZIHWMVDWUZWQZPZZWMIWYDCUVAZODCHWMDCPIJVQLUZPVDYJFDQQILWMLJXODHFDQQITDCPZZFDQQIIULFZMIVUZIHJWPZEZHIUWMLJGPDOWMLPPDHWLJMZHUZPPDJPLJWMZPFMDDUHDDQFDQQIIJVWMDCGMWMLPYIPJDWIEZHTGDDVDRRDHWCJLWTODHPMDYLJGDOOMZHXJDYUZVGZFDQQIIPWMZHZYIPJDDJZWDULPWZJWDMZHFDQQIPWLUULWYIPGDDVRHIFWLFZWDPITLWDEZHTZPFDQQIWMIWPIADCWWMZHLGMWVLPWIJFZACWWMZJLYDJVZHYMIWUIWLWCVZDHUDJGLWCVZLEZGDWWDIULFZMIVJDLVZIYMIWUIWLWCVZYIPFDQQIDHUDJGLWCVZZLWMZHFDQQIACWWMDCGMWWMZTYZHZJLFZGHIJVYDHVPWDPIT
plainText 6 = 
ZAVVXNEDHNXJVMGAXENAIQAVPGERRJJPXAIQDGNJPJVVJQXNMQGERRJMQNJVVXNMKYKEXNMKHEPXDRBVMKHWEZKQXJMIQNEZBIJFAXNAUVVJVVXNMKYRAJXNERAZNUGERRJMZEDVWKXQJUJKUXNMKHJBEDXMXGERRJAFAKMPMPAVVEPPXNAXESEPXNANEDQAZNMGNZJQFAIUVMYAVUXIDAWEXWEZKGERRJWEZKGERRJWEZKWEXZEDVWXNAPJVVKAFAIGERAXEJKAKWMZEKWAINEZRJKURMVAQMFAPJVVAKBUXNMQXMRAQNAQJMWJVEDWWEXMRDQXBAHAXXMKHQERAZNAIAKAJIXNAGAKXIAEPXNAAJIXNWEXVAXRAQAAXNJXZEDVWBAPEDIXNEDQJKWRMVAQWEZKGERRJMXNMKYPEIGERRJUEDQAAGERRJJVMGANJWVAJIKXQAFAIJVXNMKHQEPXNMQQEIXMKNAIVAQQEKQMKXNAQGNEEVIEERGERRJJKWXNEDHNXNMQZJQKEXJFAIUHEEWESSEIXDKMXUPEIQNEZMKHEPPNAIYKEZVAWHAGERRJJQXNAIAZJQKEEKAXEVMQXAKXENAIGERRJQXMVVMXZJQHEEWSIJGXMGAXEQJUMXEFAIUAQGERRJXNJXQJBEDXXNAIMHNXWMQXJKGABDXXNAKMZEKWAIZNJXVJXMXDWAEIVEKHMXDWAMFAHEXXEJVMGANJWKEMWAJZNJXVJXMXDWAZJQGERRJEIVEKHMXDWAAMXNAIGERRJBDXXNEDHNXXNAUZAIAKMGAHIJKWZEIWQXEQJU
plainText 7 = 
ABWWYOFEIOYKWNHBYFOBJRBWQHFSSKKQYBJREHOKQKWWKRYONRHFSSKNROKWWYONLZLFYONLIFQYESCWNLIXFALRYKNJROFACJKGBYOBVWWKWWYONLZSBKYOFSBAOVHFSSKNAFEWXLYRKVKLVYONLIKCFEYNYHFSSKBGBLNQNQBWWFQQYOBYFTFQYOBOFERBAONHOAKRGBJVWNZBWVYJEBXFYXFALHFSSKXFALHFSSKXFALXFYAFEWXYOBQKWWLBGBJHFSBYFKLBLXNAFLXBJOFASKLVSNWBRNGBQKWWBLCVYONRYNSBROBRKNXKWFEXXFYNSERYCBIBYYNLIRFSBAOBJBLBKJYOBHBLYJBFQYOBBKJYOXFYWBYSBRBBYOKYAFEWXCBQFEJYOFERKLXSNWBRXFALHFSSKNYONLZQFJHFSSKVFERBBHFSSKKWNHBOKXWBKJLYRBGBJKWYONLIRFQYONRRFJYNLOBJWBRRFLRNLYOBRHOFFWJFFSHFSSKKLXYOFEIOYONRAKRLFYKGBJVIFFXFTTFJYELNYVQFJROFANLIFQQOBJZLFAWBXIBHFSSKKRYOBJBAKRLFFLBYFWNRYBLYFOBJHFSSKRYNWWNYAKRIFFXTJKHYNHBYFRKVNYFGBJVBRHFSSKYOKYRKCFEYYOBJNIOYXNRYKLHBCEYYOBLNAFLXBJAOKYWKYNYEXBFJWFLINYEXBNGBIFYYFKWNHBOKXLFNXBKAOKYWKYNYEXBAKRHFSSKFJWFLINYEXBBNYOBJHFSSKCEYYOFEIOYYOBVABJBLNHBIJKLXAFJXRYFRKV
plainText 8 = 
BCXXZPGFJPZLXOICZGPCKSCXRIGTTLLRZCKSFIPLRLXXLSZPOSIGTTLOSPLXXZPOMAMGZPOMJGRZFTDXOMJYGBMSZLOKSPGBDKLHCZPCWXXLXXZPOMATCLZPGTCBPWIGTTLOBGFXYMZSLWLMWZPOMJLDGFZOZIGTTLCHCMORORCXXGRRZPCZGUGRZPCPGFSCBPOIPBLSHCKWXOACXWZKFCYGZYGBMIGTTLYGBMIGTTLYGBMYGZBGFXYZPCRLXXMCHCKIGTCZGLMCMYOBGMYCKPGBTLMWTOXCSOHCRLXXCMDWZPOSZOTCSPCSLOYLXGFYYGZOTFSZDCJCZZOMJSGTCBPCKCMCLKZPCICMZKCGRZPCCLKZPYGZXCZTCSCCZPLZBGFXYDCRGFKZPGFSLMYTOXCSYGBMIGTTLOZPOMARGKIGTTLWGFSCCIGTTLLXOICPLYXCLKMZSCHCKLXZPOMJSGRZPOSSGKZOMPCKXCSSGMSOMZPCSIPGGXKGGTIGTTLLMYZPGFJPZPOSBLSMGZLHCKWJGGYGUUGKZFMOZWRGKSPGBOMJGRRPCKAMGBXCYJCIGTTLLSZPCKCBLSMGGMCZGXOSZCMZGPCKIGTTLSZOXXOZBLSJGGYUKLIZOICZGSLWOZGHCKWCSIGTTLZPLZSLDGFZZPCKOJPZYOSZLMICDFZZPCMOBGMYCKBPLZXLZOZFYCGKXGMJOZFYCOHCJGZZGLXOICPLYMGOYCLBPLZXLZOZFYCBLSIGTTLGKXGMJOZFYCCOZPCKIGTTLDFZZPGFJPZZPCWBCKCMOICJKLMYBGKYSZGSLW
plainText 9 = 
CDYYAQHGKQAMYPJDAHQDLTDYSJHUUMMSADLTGJQMSMYYMTAQPTJHUUMPTQMYYAQPNBNHAQPNKHSAGUEYPNKZHCNTAMPLTQHCELMIDAQDXYYMYYAQPNBUDMAQHUDCQXJHUUMPCHGYZNATMXMNXAQPNKMEHGAPAJHUUMDIDNPSPSDYYHSSAQDAHVHSAQDQHGTDCQPJQCMTIDLXYPBDYXALGDZHAZHCNJHUUMZHCNJHUUMZHCNZHACHGYZAQDSMYYNDIDLJHUDAHMNDNZPCHNZDLQHCUMNXUPYDTPIDSMYYDNEXAQPTAPUDTQDTMPZMYHGZZHAPUGTAEDKDAAPNKTHUDCQDLDNDMLAQDJDNALDHSAQDDMLAQZHAYDAUDTDDAQMACHGYZEDSHGLAQHGTMNZUPYDTZHCNJHUUMPAQPNBSHLJHUUMXHGTDDJHUUMMYPJDQMZYDMLNATDIDLMYAQPNKTHSAQPTTHLAPNQDLYDTTHNTPNAQDTJQHHYLHHUJHUUMMNZAQHGKQAQPTCMTNHAMIDLXKHHZHVVHLAGNPAXSHLTQHCPNKHSSQDLBNHCYDZKDJHUUMMTAQDLDCMTNHHNDAHYPTADNAHQDLJHUUMTAPYYPACMTKHHZVLMJAPJDAHTMXPAHIDLXDTJHUUMAQMATMEHGAAQDLPKQAZPTAMNJDEGAAQDNPCHNZDLCQMAYMAPAGZDHLYHNKPAGZDPIDKHAAHMYPJDQMZNHPZDMCQMAYMAPAGZDCMTJHUUMHLYHNKPAGZDDPAQDLJHUUMEGAAQHGKQAAQDXCDLDNPJDKLMNZCHLZTAHTMX
plainText 10 = 
DEZZBRIHLRBNZQKEBIREMUEZTKIVVNNTBEMUHKRNTNZZNUBRQUKIVVNQURNZZBRQOCOIBRQOLITBHVFZQOLAIDOUBNQMURIDFMNJEBREYZZNZZBRQOCVENBRIVEDRYKIVVNQDIHZAOBUNYNOYBRQOLNFIHBQBKIVVNEJEOQTQTEZZITTBREBIWITBRERIHUEDRQKRDNUJEMYZQCEZYBMHEAIBAIDOKIVVNAIDOKIVVNAIDOAIBDIHZABRETNZZOEJEMKIVEBINOEOAQDIOAEMRIDVNOYVQZEUQJETNZZEOFYBRQUBQVEUREUNQANZIHAAIBQVHUBFELEBBQOLUIVEDREMEOENMBREKEOBMEITBREENMBRAIBZEBVEUEEBRNBDIHZAFETIHMBRIHUNOAVQZEUAIDOKIVVNQBRQOCTIMKIVVNYIHUEEKIVVNNZQKERNAZENMOBUEJEMNZBRQOLUITBRQUUIMBQOREMZEUUIOUQOBREUKRIIZMIIVKIVVNNOABRIHLRBRQUDNUOIBNJEMYLIIAIWWIMBHOQBYTIMURIDQOLITTREMCOIDZEALEKIVVNNUBREMEDNUOIIOEBIZQUBEOBIREMKIVVNUBQZZQBDNULIIAWMNKBQKEBIUNYQBIJEMYEUKIVVNBRNBUNFIHBBREMQLRBAQUBNOKEFHBBREOQDIOAEMDRNBZNBQBHAEIMZIOLQBHAEQJELIBBINZQKERNAOIQAENDRNBZNBQBHAEDNUKIVVNIMZIOLQBHAEEQBREMKIVVNFHBBRIHLRBBREYDEMEOQKELMNOADIMAUBIUNY
plainText 11 = 
EFAACSJIMSCOARLFCJSFNVFAULJWWOOUCFNVILSOUOAAOVCSRVLJWWORVSOAACSRPDPJCSRPMJUCIWGARPMBJEPVCORNVSJEGNOKFCSFZAAOAACSRPDWFOCSJWFESZLJWWOREJIABPCVOZOPZCSRPMOGJICRCLJWWOFKFPRURUFAAJUUCSFCJXJUCSFSJIVFESRLSEOVKFNZARDFAZCNIFBJCBJEPLJWWOBJEPLJWWOBJEPBJCEJIABCSFUOAAPFKFNLJWFCJOPFPBREJPBFNSJEWOPZWRAFVRKFUOAAFPGZCSRVCRWFVSFVORBOAJIBBJCRWIVCGFMFCCRPMVJWFESFNFPFONCSFLFPCNFJUCSFFONCSBJCAFCWFVFFCSOCEJIABGFUJINCSJIVOPBWRAFVBJEPLJWWORCSRPDUJNLJWWOZJIVFFLJWWOOARLFSOBAFONPCVFKFNOACSRPMVJUCSRVVJNCRPSFNAFVVJPVRPCSFVLSJJANJJWLJWWOOPBCSJIMSCSRVEOVPJCOKFNZMJJBJXXJNCIPRCZUJNVSJERPMJUUSFNDPJEAFBMFLJWWOOVCSFNFEOVPJJPFCJARVCFPCJSFNLJWWOVCRAARCEOVMJJBXNOLCRLFCJVOZRCJKFNZFVLJWWOCSOCVOGJICCSFNRMSCBRVCOPLFGICCSFPREJPBFNESOCAOCRCIBFJNAJPMRCIBFRKFMJCCJOARLFSOBPJRBFOESOCAOCRCIBFEOVLJWWOJNAJPMRCIBFFRCSFNLJWWOGICCSJIMSCCSFZEFNFPRLFMNOPBEJNBVCJVOZ
plainText 12 = 
FGBBDTKJNTDPBSMGDKTGOWGBVMKXXPPVDGOWJMTPVPBBPWDTSWMKXXPSWTPBBDTSQEQKDTSQNKVDJXHBSQNCKFQWDPSOWTKFHOPLGDTGABBPBBDTSQEXGPDTKXGFTAMKXXPSFKJBCQDWPAPQADTSQNPHKJDSDMKXXPGLGQSVSVGBBKVVDTGDKYKVDTGTKJWGFTSMTFPWLGOABSEGBADOJGCKDCKFQMKXXPCKFQMKXXPCKFQCKDFKJBCDTGVPBBQGLGOMKXGDKPQGQCSFKQCGOTKFXPQAXSBGWSLGVPBBGQHADTSWDSXGWTGWPSCPBKJCCKDSXJWDHGNGDDSQNWKXGFTGOGQGPODTGMGQDOGKVDTGGPODTCKDBGDXGWGGDTPDFKJBCHGVKJODTKJWPQCXSBGWCKFQMKXXPSDTSQEVKOMKXXPAKJWGGMKXXPPBSMGTPCBGPOQDWGLGOPBDTSQNWKVDTSWWKODSQTGOBGWWKQWSQDTGWMTKKBOKKXMKXXPPQCDTKJNTDTSWFPWQKDPLGOANKKCKYYKODJQSDAVKOWTKFSQNKVVTGOEQKFBGCNGMKXXPPWDTGOGFPWQKKQGDKBSWDGQDKTGOMKXXPWDSBBSDFPWNKKCYOPMDSMGDKWPASDKLGOAGWMKXXPDTPDWPHKJDDTGOSNTDCSWDPQMGHJDDTGQSFKQCGOFTPDBPDSDJCGKOBKQNSDJCGSLGNKDDKPBSMGTPCQKSCGPFTPDBPDSDJCGFPWMKXXPKOBKQNSDJCGGSDTGOMKXXPHJDDTKJNTDDTGAFGOGQSMGNOPQCFKOCWDKWPA
plainText 13 = 
GHCCEULKOUEQCTNHELUHPXHCWNLYYQQWEHPXKNUQWQCCQXEUTXNLYYQTXUQCCEUTRFRLEUTROLWEKYICTRODLGRXEQTPXULGIPQMHEUHBCCQCCEUTRFYHQEULYHGUBNLYYQTGLKCDREXQBQRBEUTROQILKETENLYYQHMHRTWTWHCCLWWEUHELZLWEUHULKXHGUTNUGQXMHPBCTFHCBEPKHDLEDLGRNLYYQDLGRNLYYQDLGRDLEGLKCDEUHWQCCRHMHPNLYHELQRHRDTGLRDHPULGYQRBYTCHXTMHWQCCHRIBEUTXETYHXUHXQTDQCLKDDLETYKXEIHOHEETROXLYHGUHPHRHQPEUHNHREPHLWEUHHQPEUDLECHEYHXHHEUQEGLKCDIHWLKPEULKXQRDYTCHXDLGRNLYYQTEUTRFWLPNLYYQBLKXHHNLYYQQCTNHUQDCHQPREXHMHPQCEUTROXLWEUTXXLPETRUHPCHXXLRXTREUHXNULLCPLLYNLYYQQRDEULKOUEUTXGQXRLEQMHPBOLLDLZZLPEKRTEBWLPXULGTROLWWUHPFRLGCHDOHNLYYQQXEUHPHGQXRLLRHELCTXEHRELUHPNLYYQXETCCTEGQXOLLDZPQNETNHELXQBTELMHPBHXNLYYQEUQEXQILKEEUHPTOUEDTXEQRNHIKEEUHRTGLRDHPGUQECQETEKDHLPCLROTEKDHTMHOLEELQCTNHUQDRLTDHQGUQECQETEKDHGQXNLYYQLPCLROTEKDHHTEUHPNLYYQIKEEULKOUEEUHBGHPHRTNHOPQRDGLPDXELXQB
plainText 14 = 
HIDDFVMLPVFRDUOIFMVIQYIDXOMZZRRXFIQYLOVRXRDDRYFVUYOMZZRUYVRDDFVUSGSMFVUSPMXFLZJDUSPEMHSYFRUQYVMHJQRNIFVICDDRDDFVUSGZIRFVMZIHVCOMZZRUHMLDESFYRCRSCFVUSPRJMLFUFOMZZRINISUXUXIDDMXXFVIFMAMXFVIVMLYIHVUOVHRYNIQCDUGIDCFQLIEMFEMHSOMZZREMHSOMZZREMHSEMFHMLDEFVIXRDDSINIQOMZIFMRSISEUHMSEIQVMHZRSCZUDIYUNIXRDDISJCFVUYFUZIYVIYRUERDMLEEMFUZLYFJIPIFFUSPYMZIHVIQISIRQFVIOISFQIMXFVIIRQFVEMFDIFZIYIIFVRFHMLDEJIXMLQFVMLYRSEZUDIYEMHSOMZZRUFVUSGXMQOMZZRCMLYIIOMZZRRDUOIVREDIRQSFYINIQRDFVUSPYMXFVUYYMQFUSVIQDIYYMSYUSFVIYOVMMDQMMZOMZZRRSEFVMLPVFVUYHRYSMFRNIQCPMMEMAAMQFLSUFCXMQYVMHUSPMXXVIQGSMHDIEPIOMZZRRYFVIQIHRYSMMSIFMDUYFISFMVIQOMZZRYFUDDUFHRYPMMEAQROFUOIFMYRCUFMNIQCIYOMZZRFVRFYRJMLFFVIQUPVFEUYFRSOIJLFFVISUHMSEIQHVRFDRFUFLEIMQDMSPUFLEIUNIPMFFMRDUOIVRESMUEIRHVRFDRFUFLEIHRYOMZZRMQDMSPUFLEIIUFVIQOMZZRJLFFVMLPVFFVICHIQISUOIPQRSEHMQEYFMYRC
plainText 15 = 
IJEEGWNMQWGSEVPJGNWJRZJEYPNAASSYGJRZMPWSYSEESZGWVZPNAASVZWSEEGWVTHTNGWVTQNYGMAKEVTQFNITZGSVRZWNIKRSOJGWJDEESEEGWVTHAJSGWNAJIWDPNAASVINMEFTGZSDSTDGWVTQSKNMGVGPNAASJOJTVYVYJEENYYGWJGNBNYGWJWNMZJIWVPWISZOJRDEVHJEDGRMJFNGFNITPNAASFNITPNAASFNITFNGINMEFGWJYSEETJOJRPNAJGNSTJTFVINTFJRWNIASTDAVEJZVOJYSEEJTKDGWVZGVAJZWJZSVFSENMFFNGVAMZGKJQJGGVTQZNAJIWJRJTJSRGWJPJTGRJNYGWJJSRGWFNGEJGAJZJJGWSGINMEFKJYNMRGWNMZSTFAVEJZFNITPNAASVGWVTHYNRPNAASDNMZJJPNAASSEVPJWSFEJSRTGZJOJRSEGWVTQZNYGWVZZNRGVTWJREJZZNTZVTGWJZPWNNERNNAPNAASSTFGWNMQWGWVZISZTNGSOJRDQNNFNBBNRGMTVGDYNRZWNIVTQNYYWJRHTNIEJFQJPNAASSZGWJRJISZTNNTJGNEVZGJTGNWJRPNAASZGVEEVGISZQNNFBRSPGVPJGNZSDVGNOJRDJZPNAASGWSGZSKNMGGWJRVQWGFVZGSTPJKMGGWJTVINTFJRIWSGESGVGMFJNRENTQVGMFJVOJQNGGNSEVPJWSFTNVFJSIWSGESGVGMFJISZPNAASNRENTQVGMFJJVGWJRPNAASKMGGWNMQWGGWJDIJRJTVPJQRSTFINRFZGNZSD
plainText 16 = 
JKFFHXONRXHTFWQKHOXKSAKFZQOBBTTZHKSANQXTZTFFTAHXWAQOBBTWAXTFFHXWUIUOHXWUROZHNBLFWURGOJUAHTWSAXOJLSTPKHXKEFFTFFHXWUIBKTHXOBKJXEQOBBTWJONFGUHATETUEHXWURTLONHWHQOBBTKPKUWZWZKFFOZZHXKHOCOZHXKXONAKJXWQXJTAPKSEFWIKFEHSNKGOHGOJUQOBBTGOJUQOBBTGOJUGOHJONFGHXKZTFFUKPKSQOBKHOTUKUGWJOUGKSXOJBTUEBWFKAWPKZTFFKULEHXWAHWBKAXKATWGTFONGGOHWBNAHLKRKHHWURAOBKJXKSKUKTSHXKQKUHSKOZHXKKTSHXGOHFKHBKAKKHXTHJONFGLKZONSHXONATUGBWFKAGOJUQOBBTWHXWUIZOSQOBBTEONAKKQOBBTTFWQKXTGFKTSUHAKPKSTFHXWURAOZHXWAAOSHWUXKSFKAAOUAWUHXKAQXOOFSOOBQOBBTTUGHXONRXHXWAJTAUOHTPKSEROOGOCCOSHNUWHEZOSAXOJWUROZZXKSIUOJFKGRKQOBBTTAHXKSKJTAUOOUKHOFWAHKUHOXKSQOBBTAHWFFWHJTAROOGCSTQHWQKHOATEWHOPKSEKAQOBBTHXTHATLONHHXKSWRXHGWAHTUQKLNHHXKUWJOUGKSJXTHFTHWHNGKOSFOURWHNGKWPKROHHOTFWQKXTGUOWGKTJXTHFTHWHNGKJTAQOBBTOSFOURWHNGKKWHXKSQOBBTLNHHXONRXHHXKEJKSKUWQKRSTUGJOSGAHOATE
plainText 17 = 
KLGGIYPOSYIUGXRLIPYLTBLGARPCCUUAILTBORYUAUGGUBIYXBRPCCUXBYUGGIYXVJVPIYXVSPAIOCMGXVSHPKVBIUXTBYPKMTUQLIYLFGGUGGIYXVJCLUIYPCLKYFRPCCUXKPOGHVIBUFUVFIYXVSUMPOIXIRPCCULQLVXAXALGGPAAIYLIPDPAIYLYPOBLKYXRYKUBQLTFGXJLGFITOLHPIHPKVRPCCUHPKVRPCCUHPKVHPIKPOGHIYLAUGGVLQLTRPCLIPUVLVHXKPVHLTYPKCUVFCXGLBXQLAUGGLVMFIYXBIXCLBYLBUXHUGPOHHPIXCOBIMLSLIIXVSBPCLKYLTLVLUTIYLRLVITLPAIYLLUTIYHPIGLICLBLLIYUIKPOGHMLAPOTIYPOBUVHCXGLBHPKVRPCCUXIYXVJAPTRPCCUFPOBLLRPCCUUGXRLYUHGLUTVIBLQLTUGIYXVSBPAIYXBBPTIXVYLTGLBBPVBXVIYLBRYPPGTPPCRPCCUUVHIYPOSYIYXBKUBVPIUQLTFSPPHPDDPTIOVXIFAPTBYPKXVSPAAYLTJVPKGLHSLRPCCUUBIYLTLKUBVPPVLIPGXBILVIPYLTRPCCUBIXGGXIKUBSPPHDTURIXRLIPBUFXIPQLTFLBRPCCUIYUIBUMPOIIYLTXSYIHXBIUVRLMOIIYLVXKPVHLTKYUIGUIXIOHLPTGPVSXIOHLXQLSPIIPUGXRLYUHVPXHLUKYUIGUIXIOHLKUBRPCCUPTGPVSXIOHLLXIYLTRPCCUMOIIYPOSYIIYLFKLTLVXRLSTUVHKPTHBIPBUF
plainText 18 = 
LMHHJZQPTZJVHYSMJQZMUCMHBSQDDVVBJMUCPSZVBVHHVCJZYCSQDDVYCZVHHJZYWKWQJZYWTQBJPDNHYWTIQLWCJVYUCZQLNUVRMJZMGHHVHHJZYWKDMVJZQDMLZGSQDDVYLQPHIWJCVGVWGJZYWTVNQPJYJSQDDVMRMWYBYBMHHQBBJZMJQEQBJZMZQPCMLZYSZLVCRMUGHYKMHGJUPMIQJIQLWSQDDVIQLWSQDDVIQLWIQJLQPHIJZMBVHHWMRMUSQDMJQVWMWIYLQWIMUZQLDVWGDYHMCYRMBVHHMWNGJZYCJYDMCZMCVYIVHQPIIQJYDPCJNMTMJJYWTCQDMLZMUMWMVUJZMSMWJUMQBJZMMVUJZIQJHMJDMCMMJZVJLQPHINMBQPUJZQPCVWIDYHMCIQLWSQDDVYJZYWKBQUSQDDVGQPCMMSQDDVVHYSMZVIHMVUWJCMRMUVHJZYWTCQBJZYCCQUJYWZMUHMCCQWCYWJZMCSZQQHUQQDSQDDVVWIJZQPTZJZYCLVCWQJVRMUGTQQIQEEQUJPWYJGBQUCZQLYWTQBBZMUKWQLHMITMSQDDVVCJZMUMLVCWQQWMJQHYCJMWJQZMUSQDDVCJYHHYJLVCTQQIEUVSJYSMJQCVGYJQRMUGMCSQDDVJZVJCVNQPJJZMUYTZJIYCJVWSMNPJJZMWYLQWIMULZVJHVJYJPIMQUHQWTYJPIMYRMTQJJQVHYSMZVIWQYIMVLZVJHVJYJPIMLVCSQDDVQUHQWTYJPIMMYJZMUSQDDVNPJJZQPTZJJZMGLMUMWYSMTUVWILQUICJQCVG
plainText 19 = 
MNIIKARQUAKWIZTNKRANVDNICTREEWWCKNVDQTAWCWIIWDKAZDTREEWZDAWIIKAZXLXRKAZXURCKQEOIZXUJRMXDKWZVDARMOVWSNKANHIIWIIKAZXLENWKARENMAHTREEWZMRQIJXKDWHWXHKAZXUWORQKZKTREEWNSNXZCZCNIIRCCKANKRFRCKANARQDNMAZTAMWDSNVHIZLNIHKVQNJRKJRMXTREEWJRMXTREEWJRMXJRKMRQIJKANCWIIXNSNVTRENKRWXNXJZMRXJNVARMEWXHEZINDZSNCWIINXOHKAZDKZENDANDWZJWIRQJJRKZEQDKONUNKKZXUDRENMANVNXNWVKANTNXKVNRCKANNWVKAJRKINKENDNNKAWKMRQIJONCRQVKARQDWXJEZINDJRMXTREEWZKAZXLCRVTREEWHRQDNNTREEWWIZTNAWJINWVXKDNSNVWIKAZXUDRCKAZDDRVKZXANVINDDRXDZXKANDTARRIVRRETREEWWXJKARQUAKAZDMWDXRKWSNVHURRJRFFRVKQXZKHCRVDARMZXURCCANVLXRMINJUNTREEWWDKANVNMWDXRRXNKRIZDKNXKRANVTREEWDKZIIZKMWDURRJFVWTKZTNKRDWHZKRSNVHNDTREEWKAWKDWORQKKANVZUAKJZDKWXTNOQKKANXZMRXJNVMAWKIWKZKQJNRVIRXUZKQJNZSNURKKRWIZTNAWJXRZJNWMAWKIWKZKQJNMWDTREEWRVIRXUZKQJNNZKANVTREEWOQKKARQUAKKANHMNVNXZTNUVWXJMRVJDKRDWH
plainText 20 = 
NOJJLBSRVBLXJAUOLSBOWEOJDUSFFXXDLOWERUBXDXJJXELBAEUSFFXAEBXJJLBAYMYSLBAYVSDLRFPJAYVKSNYELXAWEBSNPWXTOLBOIJJXJJLBAYMFOXLBSFONBIUSFFXANSRJKYLEXIXYILBAYVXPSRLALUSFFXOTOYADADOJJSDDLBOLSGSDLBOBSREONBAUBNXETOWIJAMOJILWROKSLKSNYUSFFXKSNYUSFFXKSNYKSLNSRJKLBODXJJYOTOWUSFOLSXYOYKANSYKOWBSNFXYIFAJOEATODXJJOYPILBAELAFOEBOEXAKXJSRKKSLAFRELPOVOLLAYVESFONBOWOYOXWLBOUOYLWOSDLBOOXWLBKSLJOLFOEOOLBXLNSRJKPODSRWLBSREXYKFAJOEKSNYUSFFXALBAYMDSWUSFFXISREOOUSFFXXJAUOBXKJOXWYLEOTOWXJLBAYVESDLBAEESWLAYBOWJOEESYEAYLBOEUBSSJWSSFUSFFXXYKLBSRVBLBAENXEYSLXTOWIVSSKSGGSWLRYALIDSWEBSNAYVSDDBOWMYSNJOKVOUSFFXXELBOWONXEYSSYOLSJAELOYLSBOWUSFFXELAJJALNXEVSSKGWXULAUOLSEXIALSTOWIOEUSFFXLBXLEXPSRLLBOWAVBLKAELXYUOPRLLBOYANSYKOWNBXLJXLALRKOSWJSYVALRKOATOVSLLSXJAUOBXKYSAKOXNBXLJXLALRKONXEUSFFXSWJSYVALRKOOALBOWUSFFXPRLLBSRVBLLBOINOWOYAUOVWXYKNSWKELSEXI
plainText 21 = 
OPKKMCTSWCMYKBVPMTCPXFPKEVTGGYYEMPXFSVCYEYKKYFMCBFVTGGYBFCYKKMCBZNZTMCBZWTEMSGQKBZWLTOZFMYBXFCTOQXYUPMCPJKKYKKMCBZNGPYMCTGPOCJVTGGYBOTSKLZMFYJYZJMCBZWYQTSMBMVTGGYPUPZBEBEPKKTEEMCPMTHTEMCPCTSFPOCBVCOYFUPXJKBNPKJMXSPLTMLTOZVTGGYLTOZVTGGYLTOZLTMOTSKLMCPEYKKZPUPXVTGPMTYZPZLBOTZLPXCTOGYZJGBKPFBUPEYKKPZQJMCBFMBGPFCPFYBLYKTSLLTMBGSFMQPWPMMBZWFTGPOCPXPZPYXMCPVPZMXPTEMCPPYXMCLTMKPMGPFPPMCYMOTSKLQPETSXMCTSFYZLGBKPFLTOZVTGGYBMCBZNETXVTGGYJTSFPPVTGGYYKBVPCYLKPYXZMFPUPXYKMCBZWFTEMCBFFTXMBZCPXKPFFTZFBZMCPFVCTTKXTTGVTGGYYZLMCTSWCMCBFOYFZTMYUPXJWTTLTHHTXMSZBMJETXFCTOBZWTEECPXNZTOKPLWPVTGGYYFMCPXPOYFZTTZPMTKBFMPZMTCPXVTGGYFMBKKBMOYFWTTLHXYVMBVPMTFYJBMTUPXJPFVTGGYMCYMFYQTSMMCPXBWCMLBFMYZVPQSMMCPZBOTZLPXOCYMKYMBMSLPTXKTZWBMSLPBUPWTMMTYKBVPCYLZTBLPYOCYMKYMBMSLPOYFVTGGYTXKTZWBMSLPPBMCPXVTGGYQSMMCTSWCMMCPJOPXPZBVPWXYZLOTXLFMTFYJ
plainText 22 = 
PQLLNDUTXDNZLCWQNUDQYGQLFWUHHZZFNQYGTWDZFZLLZGNDCGWUHHZCGDZLLNDCAOAUNDCAXUFNTHRLCAXMUPAGNZCYGDUPRYZVQNDQKLLZLLNDCAOHQZNDUHQPDKWUHHZCPUTLMANGZKZAKNDCAXZRUTNCNWUHHZQVQACFCFQLLUFFNDQNUIUFNDQDUTGQPDCWDPZGVQYKLCOQLKNYTQMUNMUPAWUHHZMUPAWUHHZMUPAMUNPUTLMNDQFZLLAQVQYWUHQNUZAQAMCPUAMQYDUPHZAKHCLQGCVQFZLLQARKNDCGNCHQGDQGZCMZLUTMMUNCHTGNRQXQNNCAXGUHQPDQYQAQZYNDQWQANYQUFNDQQZYNDMUNLQNHQGQQNDZNPUTLMRQFUTYNDUTGZAMHCLQGMUPAWUHHZCNDCAOFUYWUHHZKUTGQQWUHHZZLCWQDZMLQZYANGQVQYZLNDCAXGUFNDCGGUYNCADQYLQGGUAGCANDQGWDUULYUUHWUHHZZAMNDUTXDNDCGPZGAUNZVQYKXUUMUIIUYNTACNKFUYGDUPCAXUFFDQYOAUPLQMXQWUHHZZGNDQYQPZGAUUAQNULCGNQANUDQYWUHHZGNCLLCNPZGXUUMIYZWNCWQNUGZKCNUVQYKQGWUHHZNDZNGZRUTNNDQYCXDNMCGNZAWQRTNNDQACPUAMQYPDZNLZNCNTMQUYLUAXCNTMQCVQXUNNUZLCWQDZMAUCMQZPDZNLZNCNTMQPZGWUHHZUYLUAXCNTMQQCNDQYWUHHZRTNNDUTXDNNDQKPQYQACWQXYZAMPUYMGNUGZK
plainText 23 = 
QRMMOEVUYEOAMDXROVERZHRMGXVIIAAGORZHUXEAGAMMAHOEDHXVIIADHEAMMOEDBPBVOEDBYVGOUISMDBYNVQBHOADZHEVQSZAWROERLMMAMMOEDBPIRAOEVIRQELXVIIADQVUMNBOHALABLOEDBYASVUODOXVIIARWRBDGDGRMMVGGOEROVJVGOEREVUHRQEDXEQAHWRZLMDPRMLOZURNVONVQBXVIIANVQBXVIIANVQBNVOQVUMNOERGAMMBRWRZXVIROVABRBNDQVBNRZEVQIABLIDMRHDWRGAMMRBSLOEDHODIRHERHADNAMVUNNVODIUHOSRYROODBYHVIRQERZRBRAZOERXRBOZRVGOERRAZOENVOMROIRHRROEAOQVUMNSRGVUZOEVUHABNIDMRHNVQBXVIIADOEDBPGVZXVIIALVUHRRXVIIAAMDXREANMRAZBOHRWRZAMOEDBYHVGOEDHHVZODBERZMRHHVBHDBOERHXEVVMZVVIXVIIAABNOEVUYEOEDHQAHBVOAWRZLYVVNVJJVZOUBDOLGVZHEVQDBYVGGERZPBVQMRNYRXVIIAAHOERZRQAHBVVBROVMDHORBOVERZXVIIAHODMMDOQAHYVVNJZAXODXROVHALDOVWRZLRHXVIIAOEAOHASVUOOERZDYEONDHOABXRSUOOERBDQVBNRZQEAOMAODOUNRVZMVBYDOUNRDWRYVOOVAMDXREANBVDNRAQEAOMAODOUNRQAHXVIIAVZMVBYDOUNRRDOERZXVIIASUOOEVUYEOOERLQRZRBDXRYZABNQVZNHOVHAL
plainText 24 = 
RSNNPFWVZFPBNEYSPWFSAISNHYWJJBBHPSAIVYFBHBNNBIPFEIYWJJBEIFBNNPFECQCWPFECZWHPVJTNECZOWRCIPBEAIFWRTABXSPFSMNNBNNPFECQJSBPFWJSRFMYWJJBERWVNOCPIBMBCMPFECZBTWVPEPYWJJBSXSCEHEHSNNWHHPFSPWKWHPFSFWVISRFEYFRBIXSAMNEQSNMPAVSOWPOWRCYWJJBOWRCYWJJBOWRCOWPRWVNOPFSHBNNCSXSAYWJSPWBCSCOERWCOSAFWRJBCMJENSIEXSHBNNSCTMPFEIPEJSIFSIBEOBNWVOOWPEJVIPTSZSPPECZIWJSRFSASCSBAPFSYSCPASWHPFSSBAPFOWPNSPJSISSPFBPRWVNOTSHWVAPFWVIBCOJENSIOWRCYWJJBEPFECQHWAYWJJBMWVISSYWJJBBNEYSFBONSBACPISXSABNPFECZIWHPFEIIWAPECFSANSIIWCIECPFSIYFWWNAWWJYWJJBBCOPFWVZFPFEIRBICWPBXSAMZWWOWKKWAPVCEPMHWAIFWRECZWHHFSAQCWRNSOZSYWJJBBIPFSASRBICWWCSPWNEIPSCPWFSAYWJJBIPENNEPRBIZWWOKABYPEYSPWIBMEPWXSAMSIYWJJBPFBPIBTWVPPFSAEZFPOEIPBCYSTVPPFSCERWCOSARFBPNBPEPVOSWANWCZEPVOSEXSZWPPWBNEYSFBOCWEOSBRFBPNBPEPVOSRBIYWJJBWANWCZEPVOSSEPFSAYWJJBTVPPFWVZFPPFSMRSASCEYSZABCORWAOIPWIBM
plainText 25 = 
STOOQGXWAGQCOFZTQXGTBJTOIZXKKCCIQTBJWZGCICOOCJQGFJZXKKCFJGCOOQGFDRDXQGFDAXIQWKUOFDAPXSDJQCFBJGXSUBCYTQGTNOOCOOQGFDRKTCQGXKTSGNZXKKCFSXWOPDQJCNCDNQGFDACUXWQFQZXKKCTYTDFIFITOOXIIQGTQXLXIQGTGXWJTSGFZGSCJYTBNOFRTONQBWTPXQPXSDZXKKCPXSDZXKKCPXSDPXQSXWOPQGTICOODTYTBZXKTQXCDTDPFSXDPTBGXSKCDNKFOTJFYTICOOTDUNQGFJQFKTJGTJCFPCOXWPPXQFKWJQUTATQQFDAJXKTSGTBTDTCBQGTZTDQBTXIQGTTCBQGPXQOTQKTJTTQGCQSXWOPUTIXWBQGXWJCDPKFOTJPXSDZXKKCFQGFDRIXBZXKKCNXWJTTZXKKCCOFZTGCPOTCBDQJTYTBCOQGFDAJXIQGFJJXBQFDGTBOTJJXDJFDQGTJZGXXOBXXKZXKKCCDPQGXWAGQGFJSCJDXQCYTBNAXXPXLLXBQWDFQNIXBJGXSFDAXIIGTBRDXSOTPATZXKKCCJQGTBTSCJDXXDTQXOFJQTDQXGTBZXKKCJQFOOFQSCJAXXPLBCZQFZTQXJCNFQXYTBNTJZXKKCQGCQJCUXWQQGTBFAGQPFJQCDZTUWQQGTDFSXDPTBSGCQOCQFQWPTXBOXDAFQWPTFYTAXQQXCOFZTGCPDXFPTCSGCQOCQFQWPTSCJZXKKCXBOXDAFQWPTTFQGTBZXKKCUWQQGXWAGQQGTNSTBTDFZTABCDPSXBPJQXJCN
Simple shifting didn't give the plainText !!!!
*/