export default function BoardsListPage(){
    return null;
}

export async function getServerSideProps() {
    return {
        redirect: {
            destination: '/boards/list/notice/1',
            permanent: false
        },
    };
}