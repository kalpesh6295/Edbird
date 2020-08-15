export interface field{
    name?: string;
    quote?: string;
    image?: string;
    id?: string;
    
  }
export interface insight{
    author_name?: string;
    author_image?: string;
    author_detail?: string;
    content_image?: string;
    content_description?: string;
    content_detail?: string;
    content_heading?: string;
}
export interface stories{
    content_heading?: string;
    content_image?: string;
}
export interface content{
    content_heading?: string;
    content_detail?: string;
}

export interface author {
    name?: string;
    profession?: string;
    facebook?: string;
    linkedin?: string;
}