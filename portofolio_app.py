import streamlit as st

def main():
    st.title("Machine Learning Portfolio")

    # Sidebar with navigation links
    menu = ["Home", "Projects", "About", "Contact"]
    choice = st.sidebar.selectbox("Navigation", menu)

    if choice == "Home":
        show_home()
    elif choice == "Projects":
        show_projects()
    elif choice == "About":
        show_about()
    elif choice == "Contact":
        show_contact()

def show_home():
    st.header("Welcome to my Machine Learning Portfolio!")
    st.write("Explore my projects, learn about my skills, and get in touch.")

def show_projects():
    st.header("Projects")

    # Example machine learning project
    st.subheader("Machine Learning Project")
    st.write("(Coming Soon)")
    # st.write("Description of your machine learning project.")
    # st.image("path/to/your/project/image.jpg", caption="Project Image", use_column_width=True)

def show_about():
    st.header("About Me")
    st.write("""
I am a first year collage student at Padjadjaran University, starting to look for roles in the Startup Industry
As an Informatics Engineering major, I'm fascinated with how today's technology can process millions of raw information into a weapon for making decisions in companies
As such i have taken lots of strong communication skills, the ability to work in a team, and a willingness to constantly learn in this ever-evolving field escpecially in Data Scientist skills. I would like to put my knowledge to good use. Processing datas for companies
Let's connect or you can reach me out to danishrme@gmail.com
""")

def show_contact():
    st.header("Contact Me")
    st.write("Email: danishrme@gmail.com")
    st.write("LinkedIn: www.linkedin.com/in/danish-rahadian-23b39b283")
    st.write("Instagram: https://www.instagram.com/danishrahadian/")

if __name__ == "__main__":
    main()
