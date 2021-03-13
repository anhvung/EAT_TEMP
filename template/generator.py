import pandas as pd
import math
import codecs
import sys
import random
from datetime import datetime
df = pd.read_excel (r'EAT.xls', sheet_name='profils')
df=df.set_index('index')



def randomly(seq):
    shuffled = list(seq)
    random.shuffle(shuffled)
    return iter(shuffled)


def value_index(v,i):
    return str(df[df.index.str.startswith(v)].values.flatten().tolist()[i])
def song_info(v,df,i):

    return str(df[v].loc[i])


def generate_artists_template():
    print("generating artists template")

    list_artists = ""
   
    for i in randomly(range (len(df.columns))):
        with open('artistes_single_template.html', 'r', encoding='utf-8')as file:
            article = file.read()
        article = article.replace("place__hoder1", value_index("url",i))
        article = article.replace("place__hoder2", value_index("profilepath",i))
        article = article.replace("place__hoder3", value_index("name",i))
        list_artists+=article
    with open('artistes_template.html', 'r', encoding='utf-8')as file:
        artists = file.read()
    artists=artists.replace("place__hoder1", list_artists)
    with open("artistes"+".html", "w+", encoding='utf-8') as f:
       
        n = f.write((artists))
        f.close()
def generate_generics():
    print("generating generics")

    list_artists = ""
    list_alpha=[]
    list_promo=[]
    list_most=[]
    list_last=[]
    for i in range (len(df.columns)):
        with open('artistes_single_template.html', 'r', encoding='utf-8')as file:
            article = file.read()
        list_alpha.append(value_index("name",i))
        list_promo.append(value_index("promo",i))

        url= str(value_index("url",i))
        try:
            musicdf = pd.read_excel (r'EAT.xls', sheet_name = url)
        except:
            print('nombres')
        finally :
            musicdf = pd.read_excel (r'EAT.xls', sheet_name = str(url))
        last=0
        for k in reversed(range (len(musicdf.index))):
            #utc_time = datetime.strptime(song_info("date",musicdf,k),"%d/%m/%Y").timestamp()
            utc_time=song_info("date",musicdf,k)
            if len(utc_time)>12:timeinmillis=datetime.strptime(utc_time,
                             "%Y-%m-%d %H:%M:%S")
            else :timeinmillis=datetime.strptime(utc_time,
                             "%d/%m/%Y")
            last=max(last,int(timeinmillis.utcnow().timestamp()))
        
        list_last.append(last)
        list_most.append(len(musicdf.index))
            
    
        article = article.replace("place__hoder1", value_index("url",i))
        article = article.replace("place__hoder2", value_index("profilepath",i))
        article = article.replace("place__hoder3", value_index("name",i))
        list_artists+=article

    
        #####


        
    list_artists = ""
    for i in sorted(range(len(list_alpha)), key=lambda k: list_alpha[k]):
        with open('artistes_single_template.html', 'r', encoding='utf-8')as file:
            article = file.read()
        article = article.replace("place__hoder1", value_index("url",i))
        article = article.replace("place__hoder2", value_index("profilepath",i))
        article = article.replace("place__hoder3", value_index("name",i))
        list_artists+=article
    with open('generic_template.html', 'r', encoding='utf-8')as file:
        artists = file.read()
    artists=artists.replace("place__hoder1", list_artists)
    with open("../"+"generic_alpha"+".html", "w+", encoding='utf-8') as f:
        n = f.write((artists))
        f.close()
        ###
    list_artists = ""
    for i in sorted(range(len(list_promo)), key=lambda k: list_promo[k], reverse=True):
        with open('artistes_single_template.html', 'r', encoding='utf-8')as file:
            article = file.read()
        article = article.replace("place__hoder1", value_index("url",i))
        article = article.replace("place__hoder2", value_index("profilepath",i))
        article = article.replace("place__hoder3", value_index("name",i))
        list_artists+=article
    with open('generic_template.html', 'r', encoding='utf-8')as file:
        artists = file.read()
    artists=artists.replace("place__hoder1", list_artists)
    with open("../"+"generic_promo"+".html", "w+", encoding='utf-8') as f:
        n = f.write((artists))
        f.close()            
        

          #####


        
    list_artists = ""
    for i in sorted(range(len(list_last)), key=lambda k: list_last[k], reverse=True):
        with open('artistes_single_template.html', 'r', encoding='utf-8')as file:
            article = file.read()
        article = article.replace("place__hoder1", value_index("url",i))
        article = article.replace("place__hoder2", value_index("profilepath",i))
        article = article.replace("place__hoder3", value_index("name",i))
        list_artists+=article
    with open('generic_template.html', 'r', encoding='utf-8')as file:
        artists = file.read()
    artists=artists.replace("place__hoder1", list_artists)
    with open("../"+"generic_last"+".html", "w+", encoding='utf-8') as f:
        n = f.write((artists))
        f.close()
        ###
    list_artists = ""
    for i in sorted(range(len(list_most)), key=lambda k: list_most[k], reverse=True):
        with open('artistes_single_template.html', 'r', encoding='utf-8')as file:
            article = file.read()
        article = article.replace("place__hoder1", value_index("url",i))
        article = article.replace("place__hoder2", value_index("profilepath",i))
        article = article.replace("place__hoder3", value_index("name",i))
        list_artists+=article
    with open('generic_template.html', 'r', encoding='utf-8')as file:
        artists = file.read()
    artists=artists.replace("place__hoder1", list_artists)
    with open("../"+"generic_most"+".html", "w+", encoding='utf-8') as f:
        n = f.write((artists))
        f.close()
    
   
        ######## generic ok
    list_artists = ""
    for i in randomly(range (len(df.columns))):
        with open('artistes_single_template.html', 'r', encoding='utf-8')as file:
            article = file.read()
        article = article.replace("place__hoder1", value_index("url",i))
        article = article.replace("place__hoder2", value_index("profilepath",i))
        article = article.replace("place__hoder3", value_index("name",i))
        list_artists+=article

    with open('generic_template.html', 'r', encoding='utf-8')as file:
        generic = file.read()
    generic=generic.replace("place__hoder1", list_artists)
    generic=generic.replace('<section class="features">', '<section class="features parent-element">')
    generic=generic.replace('<script src="assets/js/main.js"></script>', '<script src="assets/js/main.js"></script>'+ '<script  src="assets/js/suffleartists.js"></script>')
    with open("../"+"generic"+".html", "w+", encoding='utf-8') as f:
       
        n = f.write((generic))
        f.close()
    

    
    
        
    
def generate_radio_js():
    print("generating radio js file")
    with open('radiotemp_template.js', 'r', encoding='utf-8')as file:
        js = file.read()
        musics=[]
    for i in range (len(df.columns)):
        
        url= str(value_index("url",i))
        profilepath=value_index("profilepath",i)
        try:
            musicdf = pd.read_excel (r'EAT.xls', sheet_name = url)
        except:
            print('nombres')
        finally :
            musicdf = pd.read_excel (r'EAT.xls', sheet_name = str(url))


        for k in reversed(range (len(musicdf.index))):
      
            musics.append(profilepath+"/"+song_info("fichier",musicdf,k))
    print("\t" +str(len(musics))+ " songs added")
    random.shuffle(musics)

    js=js.replace("place__hoder1", str(musics))
    with open("../assets/js/"+"radiotemp"+".js", "w+", encoding='utf-8') as f:
       
        n = f.write((js))
        f.close()


        
def generate_profiles():
    print("generating profiles")
    with open('footer.html', 'r', encoding='utf-8')as file:
        footer = file.read()        

    with open('artistes.html', 'r', encoding='utf-8')as file:
        artistes = file.read()

    with open('perso.html', 'r', encoding='utf-8')as file:
        perso = file.read()

       
    for i in range (len(df.columns)):
        
        with open('footer.html', 'r', encoding='utf-8')as file:
            footer = file.read()

        with open('artistes.html', 'r', encoding='utf-8')as file:
            artistes = file.read()

        with open('perso.html', 'r', encoding='utf-8')as file:
            perso = file.read()

       

       
      
        ##########################################
        musics=""
        url= str(value_index("url",i))
        profilepath=value_index("profilepath",i)+"/"
        print("\t"+ url+ " ---------" )
        try:
            musicdf = pd.read_excel (r'EAT.xls', sheet_name = url)
        except:
            print('nombres')
        finally :
            musicdf = pd.read_excel (r'EAT.xls', sheet_name = str(url))
        

        for k in reversed(range (len(musicdf.index))):
            htmlbase=""
            with open('song.html', 'r', encoding='utf-8')as file:
                htmlbase = file.read()
           
            html=htmlbase.replace("place__hoder1",profilepath+song_info("image",musicdf,k))
            html=html.replace("place__hoder2",song_info("descriptionmusique",musicdf,k))
            html=html.replace("place__hoder3",song_info("titre",musicdf,k))
            html=html.replace("place__hoder4",song_info("artiste",musicdf,k))
            html=html.replace("place__hoder5",profilepath+song_info("fichier",musicdf,k))
            html=html.replace("place__hoder6",song_info("codec",musicdf,k))
            print("\t \t"+song_info("fichier",musicdf,k) )
            musics+=html

      
            
    #############################################################
        socials=""
       
        try:
            if ('nan'!=value_index("facebook",i) ):
                with open('socials.html', 'r', encoding='utf-8')as file:
                    reseau = file.read()
                reseau = reseau.replace("place__hoder1", "fa-facebook-f")
                reseau = reseau.replace("place__hoder2", value_index("facebook",i))
                reseau = reseau.replace("place__hoder3", "FACEBOOK")
                socials+=reseau
            
        except :
            print("")
        try:
            
            if ('nan'!=value_index("soundcloud",i) ):
                with open('socials.html', 'r', encoding='utf-8')as file:
                    reseau = file.read()
                reseau = reseau.replace("place__hoder1", "fa-soundcloud")
                reseau = reseau.replace("place__hoder2", value_index("soundcloud",i))
                reseau = reseau.replace("place__hoder3", "SOUNDCLOUD")
                socials+=reseau
            
        except :
            print("")
           
        try:
            if ('nan'!= value_index("spotify",i) ):
                with open('socials.html', 'r', encoding='utf-8')as file:
                    reseau = file.read()
                reseau = reseau.replace("place__hoder1", "fa-spotify")
                reseau = reseau.replace("place__hoder2", value_index("spotify",i))
                reseau = reseau.replace("place__hoder3", "SPOTIFY")
                socials+=reseau
            
        except :
            print("")
        try:
            if ('nan'!=value_index("applemusic",i) ):
                with open('socials.html', 'r', encoding='utf-8')as file:
                    reseau = file.read()
                reseau = reseau.replace("place__hoder1", "fa-apple")
                reseau = reseau.replace("place__hoder2", value_index("applemusic",i))
                reseau = reseau.replace("place__hoder3", "APPLE MUSIC")
                socials+=reseau
            
        except :
            print("")
        try:
            if ('nan'!=value_index("dezzer",i) ):
                with open('socials.html', 'r', encoding='utf-8')as file:
                    reseau = file.read()
                reseau = reseau.replace("place__hoder1", "fa-music")
                reseau = reseau.replace("place__hoder2", value_index("dezzer",i))
                reseau = reseau.replace("place__hoder3", "DEZZER")
                socials+=reseau
            
        except :
            print("")
        try:
            if ('nan'!=value_index("instagram",i) ):
                with open('socials.html', 'r', encoding='utf-8')as file:
                    reseau = file.read()
                reseau = reseau.replace("place__hoder1", "fa-instagram")
                reseau = reseau.replace("place__hoder2", value_index("instagram",i))
                reseau = reseau.replace("place__hoder3", "INSTAGRAM")
                socials+=reseau
            
        except :
            print("")
        try:
            if ('nan'!=value_index("twitter",i) ):
                with open('socials.html', 'r', encoding='utf-8')as file:
                    reseau = file.read()
                reseau = reseau.replace("place__hoder1", "fa-twitter")
                reseau = reseau.replace("place__hoder2", value_index("twitter",i))
                reseau = reseau.replace("place__hoder3", "TWITTER")
                socials+=reseau
            
        except :
            print("")
        try:
            if ('nan'!=value_index("youtube",i) ):
                with open('socials.html', 'r', encoding='utf-8')as file:
                    reseau = file.read()
                reseau = reseau.replace("place__hoder1", "fa-youtube")
                reseau = reseau.replace("place__hoder2", value_index("youtube",i))
                reseau = reseau.replace("place__hoder3", "YOUTUBE")
                socials+=reseau
            
        except :
            print("")

        if socials=="":
            socials=("<p>C'est bien vide ici !</p>")
        
    ##########################################################
        perso = perso.replace("place__hoder1", value_index("name",i))
        perso = perso.replace("place__hoder2", value_index("profilepath",i))
        perso = perso.replace("place__hoder3", value_index("name",i))
        perso = perso.replace("place__hoder4", "[Promo "+value_index("promo",i)+"]    "+value_index("description",i))
        perso = perso.replace("place__hoder5", value_index("first_name",i))
        perso = perso.replace("place__hoder6", socials)
        perso = perso.replace("place__hoder7", musics)



        #
        with open("../"+url+".html", "w+", encoding='utf-8') as f:
       
            n = f.write((perso+artistes+footer))
            f.close()

     

generate_artists_template()
generate_generics()
generate_profiles()
generate_radio_js()
